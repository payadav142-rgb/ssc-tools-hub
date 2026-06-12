"use client";

import { useState } from "react";

import Navbar from "../../../components/Navbar";
import ToolContainer from "../../../components/ToolContainer";

export default function PdfMockConverterPage() {
  const [loading, setLoading] =
    useState(false);

  const [pdfText, setPdfText] =
    useState("");

  async function handleFileUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file =
      event.target.files?.[0];

    if (!file) return;

    setLoading(true);

    try {
      const pdfjsLib =
        await import("pdfjs-dist");

      pdfjsLib.GlobalWorkerOptions.workerSrc =
  "/pdf.worker.min.mjs";

      const arrayBuffer =
        await file.arrayBuffer();

      const pdf =
        await pdfjsLib.getDocument({
          data: arrayBuffer,
        }).promise;

      let extractedText = "";

      for (
        let pageNum = 1;
        pageNum <= pdf.numPages;
        pageNum++
      ) {
        const page =
          await pdf.getPage(pageNum);

        const textContent =
          await page.getTextContent();

        const pageText =
          textContent.items
            .map(
              (item: any) => item.str
            )
            .join(" ");

        extractedText +=
          pageText + "\n\n";
      }

      setPdfText(extractedText);
    } catch (error) {
      console.error(error);

      alert(
        "Failed to read PDF."
      );
    }

    setLoading(false);
  }

  return (
    <ToolContainer>
      <Navbar />

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <h1 className="text-5xl md:text-6xl font-extrabold">

              PDF Mock Converter

            </h1>

            <p className="text-white/60 text-lg mt-6 max-w-2xl mx-auto">

              Upload SSC PDFs and convert
              them into interactive mock
              tests.

            </p>

          </div>

          <div className="mt-16 bg-[#111827]/70 border border-orange-500/10 rounded-[32px] p-10">

            <label className="block text-lg mb-5 text-white/70">

              Upload PDF

            </label>

            <input
              type="file"
              accept=".pdf"
              onChange={
                handleFileUpload
              }
              className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4"
            />

            {loading && (

              <div className="mt-8 text-orange-400">

                Reading PDF...

              </div>

            )}

            {pdfText && (

              <div className="mt-10">

                <div className="flex items-center justify-between">

                  <h2 className="text-3xl font-bold">

                    Extracted Text

                  </h2>

                  <button
                    className="bg-white text-black px-6 py-3 rounded-2xl font-semibold"
                  >

                    Start Mock

                  </button>

                </div>

                <div className="mt-6 bg-black border border-white/10 rounded-3xl p-6 max-h-[600px] overflow-auto whitespace-pre-wrap text-white/80 leading-8">

                  {pdfText}

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

    </ToolContainer>
  );
}