
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, Link } from "react-router-dom";
import { registerschema } from "../../components/FormSchema/registerschema";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerschema)
  });

  async function onSubmit(data) {

    const users = JSON.parse(
      localStorage.getItem("jobSeekers") || "[]"
    );

    const email = data.email.trim().toLowerCase();

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      alert("Email already registered!");
      return;
    }

    const passwordBuffer = new TextEncoder().encode(data.password);

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      passwordBuffer
    );

    const passwordHash = Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const newUser = {
      name: data.name,
      email: email,
      passwordHash: passwordHash
    };

    users.push(newUser);

    localStorage.setItem(
      "jobSeekers",
      JSON.stringify(users)
    );

    alert("Registration Successful!");
    navigate("/login");
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <h2>Smart Job Portal</h2>
        <h3>Job Seeker Registration</h3>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            placeholder="Enter Name"
            {...register("name")}
          />
          <p className="error">{errors.name?.message}</p>

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <p className="error">{errors.email?.message}</p>

          <input
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>

          <button type="submit">Register</button>

        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
