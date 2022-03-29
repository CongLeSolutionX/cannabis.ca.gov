import * as d3 from "d3";
import { xml } from "d3-fetch";
import {
  getCountyColorPlaceLevel,
  getPlaceColorPlaceLevel,
} from "./processData.js";
import { chartTooltipPlace, getPlaceTooltipData } from "./placeTooltip.js";
import "./../../index.css";

/**
 * Render SVG based interactive county map using d3
 */
export default function drawCountyMap({
  data = null,
  domElement = null,
  mapLevel = "County",
  jurisdiction = null,
  tooltipElement = null,
  legendElement = null,
  chartOptions = null,
  chartBreakpointValues = null,
  screenDisplayType = null,
}) {

  try {
    /* Data processing */
    var { dataPlaces, messages, selectedCounty } = data;
    console.log("County map", jurisdiction, selectedCounty, mapLevel);

    var rawWidth = 800;
    var rawHeight = 923;

    // Clean up existing SVGs

    d3.select(domElement).select("svg").remove();

    if (
      document.querySelector(
        domElement + ' svg[data-layer-name="map-layer-container"]'
      ) === null
    ) {
      const svg = d3
        .select(domElement)
        .append("svg")
        .attr("viewBox", [0, 0, 800, 923])
        .attr("data-layer-name", "map-layers-container")
        .append("g")
        .attr("data-layer-name", "map-layers")
        .attr("cursor", "pointer")
        .attr("width", "800")
        .attr("height", "923");
      svg.append("g").attr("data-name", "land-boundaries");
      svg.append("g").attr("data-name", "county-boundaries");
      svg.append("g").attr("data-name", "places-boundaries");

    } else {
      d3.select(domElement + " [data-name] g").remove();
    }
    let tooltip = d3.select(tooltipElement);

    /* Tooltip container */
    if (d3.select(tooltipElement + " div") === null) {
      tooltip = d3
        .select(tooltipElement)
        .append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text("");
    }

    // California Counties Boundaries - has more recognizable coastline and island fills.
    // if (data.showCounties === true) {
    xml("/assets/data/cnty19_1.svg").then((counties) => {
      const countiesGroup = d3.select(
        domElement + ' [data-name="county-boundaries"]'
      );

      countiesGroup.node().append(counties.documentElement);
      let countyPaths = countiesGroup.selectAll("g path");

      countyPaths.each(function (p, j) {
        let el = d3.select(this);

        // let name = el.attr("data-name"); // TIGER2016
        let name = el.attr("data-county_nam"); // California County Boundaries (2019)
        let island = el.attr("data-island"); // Island values from californoia county boundaries
        // let geoid = el.attr("data-geoid");
        if (name === data.selectedCounty) {
          el.attr("fill", () => {
            return getCountyColorPlaceLevel(data, {
              name,
              island,
              selectedCounty,
            });
          })
            .attr("stroke-width", 1)
            .attr("stroke-opacity", 0.5)
            .attr("stroke", "#FFFFFF");

          var bbox = el.node().getBBox();

          var dx = bbox.width - bbox.x,
            dy = bbox.height - bbox.y,
            x = (bbox.x + (bbox.x + bbox.width)) / 2,
            y = (bbox.y + (bbox.y + bbox.height)) / 2,
            scale = Math.min(rawHeight / bbox.height, rawWidth / bbox.width),
            translate = [rawWidth / 2 - scale * x, rawHeight / 2 - scale * y];

          data.selectedShapeData = {
            bbox,
            dx,
            dy,
            scale,
            x,
            y,
            translate,
          };

          el.attr(
            "transform",
            "translate(" +
              data.selectedShapeData.translate +
              ")scale(" +
              data.selectedShapeData.scale +
              ")"
          );

          const placesGroup = d3.select(
            domElement + ' [data-name="places-boundaries"]'
          );
          placesGroup.attr(
            "transform",
            "translate(" +
              data.selectedShapeData.translate +
              ")scale(" +
              data.selectedShapeData.scale +
              ")"
          );
        } else {
          // Not the selected county
          el.remove();
        }
      });
    });

    /* PLACES */
    // if (data.showCities === true) {
    xml("/assets/data/tl_2016_06_place.svg").then((places) => {
      const group = d3.select(domElement + ' [data-name="places-boundaries"]');

      group.node().append(places.documentElement);
      let paths = group.selectAll("g path");

      paths.each(function (p, j) {
        let el = d3.select(this);
        let name = el.attr("data-name");
        let geoid = el.attr("data-geoid");
        let currentPlace = Object.keys(data.dataPlaces).filter((place) => {
          let item = data.dataPlaces[place];
          
          if (
            parseInt(geoid) === item["GEOID"] &&
            item.County === data.selectedCounty && 
            // item["Jurisdiction Type"] === "City" &&
            place !== "default"
          ) {
            return place;
          }
        });
      
        
        if (currentPlace !== null && currentPlace.length > 0) {
          let placeColor = getPlaceColorPlaceLevel(data, { name, geoid });
          let props = getPlaceTooltipData(data, { name, geoid });

          el.attr("stroke-width", 0.2)
            .attr("stroke-opacity", 0.4)
            .attr(
              "stroke",
              placeColor !== "transparent" ? "#FFF" : "transparent"
            );

          el.attr("fill", () => {
            let placeColor = getPlaceColorPlaceLevel(data, { name, geoid });
            return placeColor;
          })
            .attr("tabindex", "0")
            .attr("aria-label", (d, i) => {
              return "Label";
            })
            .on("mouseover focus", function (event, d) {
              d3.select(this).attr("fill-opacity", "0.8");
              tooltip.html(chartTooltipPlace(data, props, { name, geoid }));

              return tooltip
                .transition()
                .duration(0)
                .style("visibility", "visible");
            })
            .on("mousemove", function (event, d) {
              let tooltipX = 100;
              let tooltipY = 100;

              return tooltip
                .style("left", tooltipX + "px")
                .style("top", tooltipY + "px");
            })
            .on("mouseout focusout", function (d) {
              d3.select(this).attr("fill-opacity", "1");

              return tooltip
                .transition()
                .delay(500)
                .style("visibility", "hidden");
            });
        } else {
          el.remove();
        }
      });
    });
    // }
  } catch (error) {
    console.error("Error rendering cagov-county-map:", error);
  }
}
