"use client";
import { createCategory } from "@/actions/category";
import { createProduct } from "@/actions/products";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
export type ProductProps = {
  title: string;
  slug: string;
  price: string;
  imageUrl: string;
  categoryId: string;
  categoryName: string;
};
export default function ProductForm({
  categories,
}: {
  categories: Category[];
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductProps>();
  const [catErr, setCatErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function saveData(data: ProductProps) {
    data.slug = data.title.toLowerCase().split(" ").join("-");
    const selectedCategoryName = categories.find(
      (cat) => cat.id === data.categoryId
    )?.title;
    setLoading(true);
    console.log(data);
    data.categoryName = selectedCategoryName ?? "";
    const res = await createProduct(data);
    if (res.status === 200) {
      console.log("Everything was Ok");
      console.log(res);
      setLoading(false);
      reset();
      toast.success("Product Created successfully");
      router.push("/dashboard/products");
      setCatErr("");
      // Toast the message
    } else {
      setCatErr(res.error ?? "");
      toast.error(res.error);
      setLoading(false);
      return;
    }
  }
  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-6" onSubmit={handleSubmit(saveData)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Create new Product
        </h5>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product title
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
          {catErr && <p className="text-red-500">{catErr}</p>}
        </div>
        <div>
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product price
          </label>
          <input
            type="text"
            id="price"
            {...register("price", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="10"
          />
          {errors && errors.title && (
            <p className="text-red-500">Title is required</p>
          )}
          {catErr && <p className="text-red-500">{catErr}</p>}
        </div>
        <div className="">
          <label
            htmlFor="categories"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Category
          </label>
          <select
            id="categories"
            {...register("categoryId", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* <option selected>Choose a country</option> */}
            {categories.map((cat, i) => {
              return (
                <option key={i} value={cat.id}>
                  {cat.title}
                </option>
              );
            })}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Creating please wait..." : "Create Product"}
        </button>
      </form>
    </div>
  );
}
