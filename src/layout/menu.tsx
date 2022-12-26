import { Menubar } from "primereact/menubar";
import React from "react";
import { router } from "../routes";

export default function Menu():JSX.Element {

	const items = [
		{
			label: "Home",
			icon: "pi pi-fw pi-user",
			command: () => router.history.push("/"),
		},
		{
			label: "About",
			icon: "pi pi-fw pi-user",
			command: () => router.history.push("/about"),
		},
		{
			label: "Events",
			icon: "pi pi-fw pi-calendar",
			command: () => console.log(router.history),
		},
		{
			label: "Quit",
			icon: "pi pi-fw pi-power-off",
			command: () => router.history.go(-1),
		},
	];

	return <Menubar model={items} />;
}
