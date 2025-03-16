"use client";
import Image from "next/image";
import { useState } from "react";

const timezones = ["GMT", "EST", "MST", "CST", "PST"];

const roles = ["Dealer", "Price Approver", "Product Engineer"];

const themes = ["Light", "Dark", "System"];

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center min-h-screen bg-gray-100 p-4 w-[500px] mx-auto">
        <form
          className="flex flex-col gap-4 gap-y-2 w-full"
          onSubmit={handleSubmit}
        >
          {/* TEXT   */}
          <input
            type="text"
            placeholder="Username"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* EMAIL   */}
          <input
            type="email"
            placeholder="Email"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* PASSWORD   */}
          <input
            type="text"
            placeholder="Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* CONFIRM PASSWORD   */}
          <input
            type="text"
            placeholder="Confirm Password"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />
          {/* TEXTAREA   */}
          <input
            type="textarea"
            placeholder="Description"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />

          {/* SELECT   */}
          <select
            value=""
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          >
            <option value="" className=" bg-white px-4 py-2 rounded" disabled>
              Select Timezone
            </option>
            {timezones.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>

          {/* RADIO   */}
          <div className="flex gap-2">
            <span className="font-semibold w-16">Theme</span>
            {themes.map((theme) => (
              <label key={theme}>
                <input
                  type="radio"
                  name="response"
                  value={theme}
                  className="bg-white mr-1"
                />
                {theme}
              </label>
            ))}
          </div>

          {/* CHECKBOX   */}
          <div className="flex gap-2">
            <span className="font-semibold w-16">Role</span>
            {roles.map((role) => (
              <label key={role}>
                <input
                  type="checkbox"
                  name="response"
                  className="bg-white mr-1"
                />
                {role}
              </label>
            ))}
          </div>

          {/* DATE */}
          <input
            type="date"
            placeholder="Joining Date"
            className=" text-gray-900 bg-white px-4 py-2 rounded"
          />

          {/* BUTTON   */}
          <button className=" text-white bg-blue-500 py-2 rounded hover:active:translate-y-[1px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
