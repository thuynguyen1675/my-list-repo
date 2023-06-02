import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_KEY,
});

export const getReposByUsernameClient = async (username = "", page = 1) => {
  try {
    return await octokit.request("GET /users/{username}/repos", {
      username,
      page,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const getReposByOrgClient = async (
  org = "",
  page = 1,
  type = "public"
) => {
  try {
    return await octokit.request("GET /orgs/{org}/repos", {
      org,
      page,
      type,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
