type Props = {
  note: string;
  setNote: (
    value: string
  ) => void;
  saveNote: () => void;
};

export default function NotesSection({
  note,
  setNote,
  saveNote,
}: Props) {

  return (

    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-4">

        Smart Notes 📝

      </h2>

      <textarea
        value={note}
        onChange={(e) =>
          setNote(
            e.target.value
          )
        }
        placeholder="Write your study notes here..."
        className="w-full h-40 bg-black border border-white/10 rounded-2xl p-4 outline-none"
      />

      <button
        onClick={saveNote}
        className="mt-4 bg-white text-black px-6 py-3 rounded-2xl font-semibold"
      >

        Save Notes

      </button>

    </div>

  );

}