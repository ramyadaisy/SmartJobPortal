
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/FormSchema/registerschema";

function Register() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerschema)
  });

  function onSubmit(data) {
    console.log(data);
    alert("Registration Successful!");
  }

  return (
    <div>
      <h2>Job Seeker Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="Enter Name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <br />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <br />

        <button type="submit">Register</button>

      </form>
    </div>
  );
}

export default Register;
