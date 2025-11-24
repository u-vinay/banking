import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({accounts= [],totalBanks,totalCurrentBalance}:TotlaBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-chart sm:gap-6 sm:p-6">
        <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
          <DoughnutChart accounts={accounts}/>
        </div>
        <div className="text-14 font-medium text-gray-600">
          <h2 className="font-bold py-4">
             Bank Accounts: {totalBanks}
          </h2>
          <div className=" text-24 lg:text-30 flex-1 font-semibold text-gray-900">
            <p className="text-base">
              Total Current Balance
            </p>
            <div className="font-bold text-2xl">
              <AnimatedCounter amount={totalCurrentBalance} />
            </div>
          </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox