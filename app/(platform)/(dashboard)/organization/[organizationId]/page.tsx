import { db } from "@/lib/db";

const OrganizationIdPage = () => {
  async function create(formdata: FormData) {
    "use server";

    const title = formdata.get("title") as string;

    await db.board.create({
      data: {
        title,
      },
    });
  }

  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
      </form>
    </div>
  );
};

export default OrganizationIdPage;
