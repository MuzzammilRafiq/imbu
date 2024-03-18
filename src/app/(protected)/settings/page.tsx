import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md mx-8 hover:bg-blue-500"
        >
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
