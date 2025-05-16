import React, { useEffect, useState } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
         
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id) => {
    if (confirm("are you sure you want to update this user role")) {
      try {
        const { data } = await axios.put(
          `${server}/api/user/${id}`,
          {},
          {
            headers: {
   
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  const deleteUser = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
      try {
        const { data } = await axios.delete(`${server}/api/user/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        toast.success(data.message);
        fetchUsers();
      } catch (error) {
        toast.error(error.response.data.message || "Failed to delete user");
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <Layout>
      <div className="users">
        <h1>All Users</h1>
        <div className="table-container">
          <table border="black">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update Role</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {users &&
                users.map((e, i) => (
                  <tr key={e._id}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td>
                      <button
                        onClick={() => updateRole(e._id)}
                        className="btn"
                      >
                        Update Role
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteUser(e._id)}
                        className="btn"
                        style={{ background: "red" }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>


  );
};

export default AdminUsers;