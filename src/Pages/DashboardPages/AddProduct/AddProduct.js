import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        fetch("https://stark-fortress-48144.herokuapp.com/products", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            });
    };
    return (
        <div>
            <div className="container my-5">
                <h2 className="text-center my-5">Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name", { required: true })}
                        placeholder="Product Name"
                        className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                        {...register("img", { required: true })}
                        placeholder="Product Img Link"
                        className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="Price (BDT)"
                        className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                        type="text"
                        {...register("shortDescription", { required: true })}
                        placeholder="Short Description"
                        className="mb-2 p-2"
                    />{" "}
                    <br />
                    <input
                        type="text"
                        {...register("longDescription", { required: true })}
                        placeholder="Long Description"
                        className="mb-2 p-2"
                    />{" "}
                    <br />

                    {(errors.name,
                        errors.img,
                        errors.price,
                        errors.weight,
                        errors.engine,
                        errors.description,
                        errors.color) && <span>This field is required</span>}{" "}
                    <br />
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;