import React from "react";
import {Tabs, Tab, Input , Button , Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem , Textarea} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import {HeartIcon} from './HeartIcon';
import {SearchIcon} from "./SearchIcon.jsx";
import IMAGES from "../../../public/Images";

export default function Navbar() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [modalPlacement, setModalPlacement] = React.useState("auto");
  const [value, setValue] = React.useState("");
  const [linkValue , setLinkValue] = React.useState("");
  const [validityDate , setValidityDate] = React.useState("");
  const [selectedCategory, setSelectedItem] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description , setDescription] = React.useState("");
  const [couponCode , setCouponCode] = React.useState("");

  const handleSelect = (key) => {
    setSelectedItem(key);
  };

  const validateURL = (value) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i'); 
    return pattern.test(value);
};

  const isInvalid = React.useMemo(() => {
    if (linkValue === "") return false;

    return validateURL(linkValue) ? false : true;
  }, [linkValue]);


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
      <Button  className=" mr-2" onPress={onOpen} >Add</Button>
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
      <Modal 
        isOpen={isOpen} 
        placement={modalPlacement}
        onOpenChange={onOpenChange} 
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex">Add Coupon <img src={IMAGES.coupon} alt="logo" className="w-8 ml-2" /></ModalHeader>
              <ModalBody>
                <div className=" flex flex-1 gap-2">
                <Input
                  value={value}
                  type="name"
                  label="Name *"
                  variant="bordered"
                  onValueChange={setValue}
                  placeholder="Coupon name"
                  isClearable
                  className="max-w-xs"
                />
                 <Input
                  value={couponCode}
                  type="text"
                  label="Code *"
                  variant="bordered"
                  onValueChange={setCouponCode}
                  placeholder="Coupon Code"
                  isClearable
                  className="max-w-xs"
                />

                </div>

                <div>
                <Input
                    value={linkValue}
                    type="link"
                    label="Url *"
                    variant="bordered"
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : "success"}
                    errorMessage={isInvalid && "Please enter a valid url"}
                    onValueChange={setLinkValue}
                    placeholder="eg. https://www.zomato.com/india"
                    isClearable
                />
                </div>

                <div className=" flex flex-1 gap-2">
                <Input
                  value={validityDate}
                  type="date"
                  variant="bordered"
                  onValueChange={setValidityDate}
                  isClearable
                  className="max-w-xs"
                />
                <div>
                <Dropdown backdrop="blur">
                    <DropdownTrigger>
                    <Button variant="bordered">
                        {selectedCategory !== "" ? selectedCategory : "Category"}
                    </Button>
                    </DropdownTrigger>
                    <DropdownMenu variant="flat" aria-label="Dropdown menu with shortcut" onAction={handleSelect}>
                      <DropdownItem key="food"  startContent={<img src={IMAGES.food} alt="logo" className="w-6 ml-2" />}>Food</DropdownItem>
                      <DropdownItem key="clothes" startContent={<img src={IMAGES.clothes} alt="logo" className="w-5 ml-2" />}>Clothes</DropdownItem>
                      <DropdownItem key="grooming"  startContent={<img src={IMAGES.skin} alt="logo" className="w-5 ml-2" />}>Grooming</DropdownItem>
                      <DropdownItem key="home" startContent={<img src={IMAGES.realestate} alt="logo" className="w-5 ml-2" />}>Real Estate</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                </div>

                <div>
                <Input
                  value={title}
                  type="text"
                  label="Title *"
                  variant="bordered"
                  onValueChange={setTitle}
                  placeholder="Set Title"
                />
                <Textarea
                value={description}
                onValueChange={setDescription}
                     label="Description"
                     variant="bordered"
                     placeholder="Enter your description"
                     disableAnimation
                     disableAutosize
                     classNames={{
                       input: "resize-y min-h-[40px]",
                     }}
                     className=" mt-2"
                   />
                </div>
             
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
</div> 
  );
}
