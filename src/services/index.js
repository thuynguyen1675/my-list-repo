import {
  getReposByOrgClient,
  getReposByUsernameClient,
} from "../clients/index";

export const getReposByOrgService = async (
  org = "",
  page = 1,
  type = "public"
) => {
  const res = await getReposByOrgClient(org, page, type);
  return res?.data || [];
};

export const getReposByUserNameService = async (username = "", page = 1) => {
  const res = await getReposByUsernameClient(username, page);
  return res?.data || [];
};
