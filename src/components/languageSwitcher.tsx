import { FaChevronDown } from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import type { FC } from "react";
import { Language } from "../data/data";

export const LanguageSwitcher: FC<{ lang: string }> = ({ lang }) => {
    return (
        <Menu as="div" className="relative print:hidden" >
            <MenuButton className="flex flex-row items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm">
                <span className="uppercase">{lang}</span>
                <FaChevronDown className="w-4 h-4 transition-transform ui-open:rotate-180" />
            </MenuButton>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="bg-white" anchor={{to: "bottom end", gap: "10px"}}>
                    {
                        Object.values(Language).sort().map(value =>
                            <MenuItem>
                                {({ focus }) => (
                                    <a
                                        href={`/${value}`}
                                        className={`block px-4 py-2 text-sm uppercase ${focus ? "bg-gray-50" : ""} ${lang === value ? "text-primary font-medium" : "text-gray-700"}`}
                                    >
                                        {value}
                                    </a>
                                )}
                            </MenuItem>)
                    }
                </MenuItems>
            </Transition>
        </Menu>);
};
