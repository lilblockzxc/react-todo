import { apiService } from "./Login/Login";

export const TestPost = () => {
  return (
    <button
      onClick={async () => {
        const res = await apiService.postJson("api/api", {
          zzz: "aa",
          items: [1, 2, "bbb"],
        });
        return res;
      }}
    >
      Test
    </button>
  );
};
