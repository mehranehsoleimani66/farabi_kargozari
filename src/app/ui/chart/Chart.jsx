"use client";

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  xAxis: [
    {
      label: "بازدهی ۱۴ ساله مدیریت دارایی فارابی در مقایسه با سایر بازارها"
    }
  ],
  width: 500,
  height: 400
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: "سود بانکی"
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: "مدیریت دارایی فارابی"
  },

  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: "شاخص بورس"
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: "دلار"
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "مسکن"
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "شاخص بورس"
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "مدیریت دارایی فارابی"
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: "سکه"
  }
];

const valueFormatter = (value) => `${value}mm`;

export default function Chart() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[{ dataKey: "seoul", label: "کارگزاری فارابی", valueFormatter }]}
      layout="horizontal"
      fill="url(#zr2322-gradient-0)"
      {...chartSetting}
    />
  );
}
