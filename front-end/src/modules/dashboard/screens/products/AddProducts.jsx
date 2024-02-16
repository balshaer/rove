import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import { useState } from "react";
import Select from "react-select";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";

export default function AddProducts() {
  const [category, setCategory] = useState(null);

  const options = [
    { value: "", label: "User" },
    { value: "", label: "Writer" },
    { value: "", label: "Admin" },
    { value: "", label: "Product Manger" },
  ];
  return (
    <AnimatedComponent>
      <div className="flex gap-4 flex-col">
        <div>
          <Select
            onChange={(selectedOption) => setCategory(selectedOption)}
            name="role"
            id="role"
            value={options.label}
            options={options}
          />
        </div>

        <div>
          <Input className="h-max w-full" type="text" placeholder="Title" />
        </div>

        <div>
          <Input
            className="h-max w-full"
            type="text"
            placeholder="Description"
          />
        </div>

        <div>
          <Input className="h-max w-full" type="text" placeholder="Price" />
        </div>

        <div>
          <Input className="h-max w-full" type="text" placeholder="Discount" />
        </div>

        <div>
          <Input className="h-max w-full" type="text" placeholder="About" />
        </div>

        <div>
          <Input className="h-max w-full" type="file" placeholder="Image" />
        </div>

        <div>
          <Button text="Submit" />
        </div>
      </div>
    </AnimatedComponent>
  );
}
