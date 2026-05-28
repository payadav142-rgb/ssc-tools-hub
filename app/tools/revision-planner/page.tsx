"use client";

import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

type Task = {
  text: string;
  completed: boolean;
};

export default function RevisionPlannerPage() {

  const [task, setTask] =
    useState("");

  const [tasks, setTasks] =
    useState<Task[]>([]);

  useEffect(() => {

    const savedTasks =
      localStorage.getItem(
        "revisionTasks"
      );

    if (savedTasks) {

      setTasks(
        JSON.parse(savedTasks)
      );

    }

  }, []);

  function saveTasks(
    updatedTasks: Task[]
  ) {

    setTasks(updatedTasks);

    localStorage.setItem(
      "revisionTasks",
      JSON.stringify(updatedTasks)
    );

  }

  function addTask() {

    if (!task.trim()) {
      return;
    }

    const updatedTasks = [
      {
        text: task,
        completed: false,
      },
      ...tasks,
    ];

    saveTasks(updatedTasks);

    setTask("");

  }

  function toggleTask(
    index: number
  ) {

    const updatedTasks =
      [...tasks];

    updatedTasks[index]
      .completed =
      !updatedTasks[index]
        .completed;

    saveTasks(updatedTasks);

  }

  function deleteTask(
    index: number
  ) {

    const updatedTasks =
      tasks.filter(
        (_, i) =>
          i !== index
      );

    saveTasks(updatedTasks);

  }

  const completedTasks =
    tasks.filter(
      (task) =>
        task.completed
    ).length;

  return (

    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-6xl font-extrabold">
              SSC Revision Planner
            </h1>

            <p className="text-white/50 text-xl mt-6">
              Organize and track your daily revision tasks.
            </p>

          </div>

          {/* Card */}
          <div className="mt-16 bg-white/[0.04] border border-white/10 rounded-[32px] p-10">

            {/* Input */}
            <div className="flex flex-col md:flex-row gap-4">

              <input
                type="text"
                value={task}
                onChange={(e) =>
                  setTask(
                    e.target.value
                  )
                }
                placeholder="Add revision topic..."
                className="flex-1 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-white/20"
              />

              <button
                onClick={addTask}
                className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Add Task
              </button>

            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">

                <p className="text-white/50">
                  Total Tasks
                </p>

                <h2 className="text-5xl font-extrabold mt-4">
                  {tasks.length}
                </h2>

              </div>

              <div className="bg-black border border-white/10 rounded-3xl p-8 text-center">

                <p className="text-white/50">
                  Completed
                </p>

                <h2 className="text-5xl font-extrabold mt-4">
                  {completedTasks}
                </h2>

              </div>

            </div>

            {/* Tasks */}
            <div className="mt-12 space-y-5">

              {tasks.length === 0 && (

                <div className="text-center text-white/40 py-10">
                  No revision tasks added yet.
                </div>

              )}

              {tasks.map(
                (item, index) => (

                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
                  >

                    <div>

                      <p
                        className={`text-xl ${
                          item.completed
                            ? "line-through text-white/40"
                            : ""
                        }`}
                      >
                        {item.text}
                      </p>

                    </div>

                    <div className="flex gap-4">

                      <button
                        onClick={() =>
                          toggleTask(index)
                        }
                        className="bg-green-500 text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
                      >
                        {item.completed
                          ? "Undo"
                          : "Done"}
                      </button>

                      <button
                        onClick={() =>
                          deleteTask(index)
                        }
                        className="bg-red-500 text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>

  );

}