export function GeneralDashboard() {
  return (
    <div style={{ height: '95%' }} className="flex items-center justify-center bg-white w-full rounded-3xl space-x-5">
      <div className="flex flex-col items-center w-8/12 h-full">
        <div className="flex justify-center bg-white w-11/12 h-3/6 rounded-3xl space-x-5">
          <div className="flex flex-col w-6/12 h-full">
            <h1>Geral</h1>
            <div className="flex flex-col justify-end py-4 px-4 space-y-2 bg-card bg-cover w-full h-4/6 my-auto rounded-2xl">
              <div>
                <p className="text-xs text-white">Cliente desde</p>
                <p className="text-xs text-white">01/04/2023</p>
              </div>
              <div>
                <p className="text-xs text-white">Nome</p>
                <p className="text-xs text-white">Leonardo Funabashi</p>
              </div>
            </div>
          </div>
          <div className="bg-blue w-5/12 h-full">

          </div>
        </div>
        <div className="bg-white w-11/12 h-3/6 rounded-3xl">
          Transaçoes
        </div>
      </div>
      <div className="bg-blue w-3/12 h-full">

      </div>
    </div>
  )
}