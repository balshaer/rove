import Button from "@/components/custom/buttons/Button";

export default function Products() {
  return (
    <section>
      <div className="max-w-screen-xl m-auto py-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Watches
                </h2>
                <p className="mt-4 text-gray-500">
                  We've dedicated a distinct section to watches and accessories.
                </p>
              </header>

              <Button
                className="bg-[#040320] hover:bg-[#040320c2] my-5"
                height="40px"
                width="50%"
                text="Shop All"
              />
            </div>
          </div>
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="aspect-square w-full rounded object-cover"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      OMEGA
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">$550</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="group block">
                  <img
                    src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt
                    className="aspect-square w-full rounded object-cover"
                  />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      FOOSSIL
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">$300</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
