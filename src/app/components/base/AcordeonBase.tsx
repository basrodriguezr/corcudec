import React, { useState } from "react";
import Link from "next/link";

export interface AcordeonRef {
	href: string;
	target: string;
	rel: string;
	text: string;
}

export const Acordeon = ({
	links,
	texto,
	abierto = false
}: {
	links: AcordeonRef[];
	texto: string;
	abierto?: boolean;
}) => {
	const [open, setOpen] = useState(abierto);

	return (
		<>
			<section>
				<button
					onClick={() => setOpen(!open)}
					className={`accordion-btn ${open ? "active" : ""}`}
				>
					{texto}
				</button>

				<div className={`accordion-content ${open ? "block" : "hidden"}`}>
					<ul className="font-medium">
						{links.map((LinkRef, index) => (             
								<li key={index}>
									<Link
										href={LinkRef.href}
										target={LinkRef.target}
										rel={LinkRef.rel}
									>
										{LinkRef.text}
									</Link>
								</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};
