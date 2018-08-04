import React, { Component } from "react";
import MainBottom from "./MainBottom";
import "./ListView.css";

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}
export default class ListView extends Component {
  render() {
    let { articles, searchTerm } = this.props;
    return (
      <div>
        <div className="list-nav">
          <table className="table-wrapper">
            <thead className="thead-wrapper">
              <tr>
                <th class="ant-table-column-has-filters">
                  <span>
                    Name<div class="ant-table-column-sorter">
                      <span class="ant-table-column-sorter-up off" title="↑">
                        <i class="anticon anticon-caret-up" />
                      </span>
                      <span class="ant-table-column-sorter-down off" title="↓">
                        <i class="anticon anticon-caret-down" />
                      </span>
                    </div>
                  </span>
                </th>
                <th>
                  <span>Code</span>
                </th>
                <th>
                  <span>Unit Price</span>
                </th>
                <th>
                  <span>Manufacturer</span>
                </th>
                <th>
                  <span>UOM</span>
                </th>
                <th>
                  <span>CATEGORY</span>
                </th>
                <th>
                  <span>REORDER LEVEL</span>
                </th>
                <th>
                  <span>STATUS</span>
                </th>
                <th>
                  <span>
                    <i class="anticon anticon-question-circle" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr class="">
                <td class="">
                  <span />Product 1
                </td>
                <td class="">P1000</td>
                <td class="">25.64</td>
                <td class="">Adidas</td>
                <td class="">pieces</td>
                <td class="">general</td>
                <td class="">10</td>
                <td class="" />
                <td class="" />
              </tr>
            </tbody>
          </table>
        </div>
        <MainBottom />
      </div>
    );
  }
}
