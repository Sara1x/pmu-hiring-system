import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function DeanDashboard() {
  const navigate = useNavigate();

  return (
    <Layout
      navigate={navigate}
      logout={() => navigate("/")}
      userName="Dr. Dean"
      userTitle="Dean"
    >
      <h1 className="text-3xl font-bold text-[#002147] mb-6">
        Dean Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Applications</p>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Interviews</p>
          <p className="text-3xl font-bold">5</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Decisions</p>
          <p className="text-3xl font-bold">3</p>
        </div>
      </div>
    </Layout>
  );
}
