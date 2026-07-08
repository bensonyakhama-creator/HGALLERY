import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useCart } from "./cart-CbnreYHO.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { M as ArrowUp, T as Clock3, _ as Menu, d as Search, l as ShoppingCart, p as Phone, t as X, v as MapPin, w as Clock, y as Mail } from "../_libs/lucide-react.mjs";
import { a as FaWhatsapp, i as FaTiktok, n as FaInstagram, o as FaYoutube, r as FaLinkedinIn, t as FaFacebookF } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-HnWCtImy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hidden lg:block bg-[#5B1F1F] text-white border-b border-[#8C5A3C]/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+254726335283",
					className: "flex items-center gap-2 hover:text-amber-300 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), "+254 726 335 283"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:hgalleryltd@gmail.com",
					className: "flex items-center gap-2 hover:text-amber-300 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 }), "hgalleryltd@gmail.com"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 14 }), "Our Mall, Magadi Road, Nairobi"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { size: 14 }), "Mon - Sat | 8:00 AM - 6:00 PM"]
				})]
			})]
		})
	});
}
var links = [
	{
		name: "Home",
		to: "/"
	},
	{
		name: "About",
		to: "/about"
	},
	{
		name: "Services",
		to: "/services"
	},
	{
		name: "Projects",
		to: "/projects"
	},
	{
		name: "Shop",
		to: "/shop"
	},
	{
		name: "Contact",
		to: "/contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { count } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[#5B1F1F] text-white font-bold text-2xl shadow-lg",
						children: "H"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold tracking-tight text-[#5B1F1F]",
						children: "HGALLERY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-gray-500",
						children: "Glass • Aluminium • Shower Cubicles"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-8",
					children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeProps: { className: "text-[#8C5A3C] font-semibold border-b-2 border-[#8C5A3C]" },
						className: "text-gray-700 hover:text-[#5B1F1F] transition pb-1",
						children: item.name
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full bg-gray-100 p-3 hover:bg-[#5B1F1F] hover:text-white transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { size: 18 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "relative rounded-full bg-gray-100 p-3 hover:bg-[#5B1F1F] hover:text-white transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { size: 18 }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white",
								children: count
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+254726335283",
							className: "rounded-xl bg-[#5B1F1F] px-5 py-3 text-white font-semibold hover:bg-[#8C5A3C] transition flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 18 }), "Call Now"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(!open),
					className: "lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col px-6 py-4",
				children: [links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "py-3 border-b hover:text-[#5B1F1F]",
					children: item.name
				}, item.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "tel:+254726335283",
					className: "mt-5 rounded-xl bg-[#5B1F1F] py-3 text-center text-white font-semibold",
					children: "Call Now"
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		style: {
			backgroundImage: "url('/images/footer/footer-bg.jpg')",
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#5B1F1F]/90" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300",
					children: "Ready To Start?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl",
					children: [
						"Premium Glass & Aluminium",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Solutions for Every Space"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl",
					children: "HGALLERY supplies and installs premium shower cubicles, frameless glass, aluminium windows, office partitions, mirrors, wall panels and bespoke glass solutions for residential and commercial projects throughout Kenya."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-amber-600",
						children: "Request a Quote"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+254726335283",
						className: "rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/20",
						children: "Call Now"
					})]
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[#2F1111] text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logos/footer-logo.png",
						alt: "HGALLERY",
						className: "mb-6 h-14"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-8 text-gray-300",
						children: "HGALLERY is your trusted supplier and installer of premium glass, aluminium and shower cubicle solutions for residential and commercial projects throughout Kenya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://facebook.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaFacebookF, {
									className: "text-[#1877F2]",
									size: 20
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://instagram.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaInstagram, {
									className: "text-[#E4405F]",
									size: 20
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/254726335283",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, {
									className: "text-[#25D366]",
									size: 20
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://youtube.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaYoutube, {
									className: "text-[#FF0000]",
									size: 20
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://linkedin.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedinIn, {
									className: "text-[#0A66C2]",
									size: 20
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://tiktok.com",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "flex h-11 w-11 items-center justify-center rounded-xl bg-white transition hover:scale-110",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTiktok, {
									className: "text-black",
									size: 20
								})
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-6 text-xl font-bold text-amber-400",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "block hover:text-amber-400",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "block hover:text-amber-400",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "block hover:text-amber-400",
							children: "Shop"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "block hover:text-amber-400",
							children: "Contact"
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-6 text-xl font-bold text-amber-400",
					children: "Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-gray-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Shower Cubicles" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Frameless Glass" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Aluminium Windows" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Aluminium Doors" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Office Partitions" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Mirrors" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Wall Panels" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Glass Railings" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-6 text-xl font-bold text-amber-400",
					children: "Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-gray-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Site Survey" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Professional Installation" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Glass Fabrication" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Aluminium Fabrication" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Repairs & Maintenance" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✓ Custom Projects" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-6 text-xl font-bold text-amber-400",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-gray-300",
								children: [
									"Our Mall",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Magadi Road",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Nairobi, Kenya"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+254726335283",
								className: "hover:text-amber-400",
								children: "+254 726 335 283"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:hgalleryltd@gmail.com",
								className: "hover:text-amber-400",
								children: "hgalleryltd@gmail.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								"Mon – Sat",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"8:00 AM – 6:00 PM"
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://maps.google.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-block rounded-lg bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600",
							children: "View on Google Maps"
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-gray-400 md:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" HGALLERY LTD. All Rights Reserved."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Privacy Policy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Terms & Conditions"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								children: "Sitemap"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => window.scrollTo({
							top: 0,
							behavior: "smooth"
						}),
						className: "rounded-full bg-amber-500 p-3 text-white transition hover:bg-amber-600",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 18 })
					})
				]
			})
		})]
	})] });
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PageShell as t };
