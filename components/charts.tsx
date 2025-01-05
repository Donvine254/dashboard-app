"use client";
import { revenueData, visitorsData } from "@/constants";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import React from "react";

export default function Charts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 p-2 sm:p-4 md:p-6">
      <div className="rounded-lg border bg-card p-2 md:p-4">
        <h3 className="font-semibold mb-4">Revenue Trend</h3>
        <div className="h-[300px] text-xs sm:text-sm md:text-base">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <CartesianGrid stroke="#e4e4e7" />
              <YAxis
                dataKey="revenue"
                domain={[(dataMin: number) => dataMin * 0.5, "dataMax"]}
                tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
              />
              <Tooltip />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#2563eb" }}>{value}</span>
                )}
              />
              <Bar
                dataKey="revenue"
                fill="#2563eb"
                radius={[4, 4, 0, 0]}
                barSize={20}>
                {revenueData.map((entry, index) => {
                  const maxValue = Math.max(
                    ...revenueData.map((d) => d.revenue)
                  );
                  const minValue = Math.min(
                    ...revenueData.map((d) => d.revenue)
                  );
                  const normalizedOpacity =
                    (entry.revenue - minValue) / (maxValue - minValue) || 0.5;
                  const opacity = 0.5 + normalizedOpacity * 0.5;
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={`rgba(37, 99, 235, ${opacity})`}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold mb-4 ">Site Visitors</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={visitorsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid stroke="#e4e4e7" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#2563eb"
                strokeWidth={2}
                fill="#bfdbfe"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#2563eb" }}>{value}</span>
                )}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
