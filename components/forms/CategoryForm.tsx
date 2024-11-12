"use client";
import { createCategory } from "@/actions/category";
import React from "react";
import { useForm } from "react-hook-form";
export type CategoryProps = {
  title: string;
  slug: string;
};
export default function CategoryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryProps>();
  async function saveData(data: CategoryProps) {
    data.slug = data.title.toLowerCase().split(" ").join("-");
    await createCategory(data);
  }
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(saveData)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Create new Category
        </h5>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Category title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
          />
          {errors && errors.title && (
            <p className="text-red-500">Title is required</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create Category
        </button>
      </form>
    </div>
  );
}
