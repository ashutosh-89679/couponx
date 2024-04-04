import React from "react";
import {Tabs, Tab, Input , Button , Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem , Textarea} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import {HeartIcon} from './HeartIcon';
import {SearchIcon} from "./SearchIcon.jsx";
import IMAGES from "../../../public/Images";
import AddCouponModal from "./AddCouponModal.jsx";

export default function Navbar() {

  return (
    <div className="flex w-full justify-between items-center navbar mt-2 px-4 mb-2 backdrop-blur-sm">
      <img src={IMAGES.logo} alt="logo" className=" w-12 mr-2" />
      <div className="flex justify-start flex-grow">
        <Tabs aria-label="Options" color="danger" radius="full">
          <Tab key="coupons" title="Coupons" radius="full"></Tab>
          <Tab key="offers" title="Offers"></Tab>
          <Tab key="sales" title="Sales"></Tab>
        </Tabs>
      </div>

     <div className="flex justify-end">
     <AddCouponModal />
        <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full mr-2",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Quick search..."
        size="sm"
        startContent={<SearchIcon size={15} />}
        type="search"
        />

        <Switch
          defaultSelected
          size="lg"
          color="success"
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        ></Switch>
      </div>
     
</div> 
  );
}
