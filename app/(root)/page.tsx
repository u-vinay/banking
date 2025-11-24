import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import RecentTransactions from "@/components/RecentTransactions";
// const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
const Home = async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) {
  const { id } = await searchParams;
  const { page } = await searchParams;
  const currentPage = Number(page as string) || 1;
  // console.log(currentPage);
  // const currentPage =Number(page as string) || 1;
  // const id = (await searchParams).id;
  // console.log("id ", id);
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  const account = await getAccount({ appwriteItemId });
  // console.log("account", account);
  // console.log("loggedIn", loggedIn);
  // console.log("appwriteId", appwriteItemId);
  // console.log({
  //   accountsData,
  //   account,
  // });
  // console.log(account?.transactions);
  return (
    <section className="home max-xl:max-h-screen max-xl:overflow-y-scroll">
      <div className="home-content gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
