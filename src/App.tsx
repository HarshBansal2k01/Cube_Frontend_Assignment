import CustomerList from "./components/CustomerList";
import CustomerDetails from "./components/CustomerDetails";
import { useMemo, useState } from "react";
import Chance from "chance";
import "./App.css";
import Header from "./components/Header";
import { Customer } from "./components/Types";

const chance = new Chance();

const App = () => {
  const customers = useMemo(() => {
    return Array.from({ length: 1000 }).map(() => ({
      id: chance.guid(),
      name: chance.name(),
      title: chance.profession(),
      address: chance.address(),
      avatar: chance.avatar(),
    }));
  }, []);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer| null>(null);

  return (
    <>
      <div >
        <Header />
        <div className="flex h-screen">
          <div className="basis-4/12">
            <div className="scroll-hidden h-full overflow-y-auto ml-1">
              <CustomerList
                customers={customers}
                onSelect={setSelectedCustomer}
              />
            </div>
          </div>
          <div className="w-0.5 bg-gray-200 mx-2 h-full" />
          <div className="basis-8/12 flex justify-center items-start">
            {selectedCustomer && (
              <CustomerDetails customer={selectedCustomer} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
