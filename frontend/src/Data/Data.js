import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
} from "@iconscout/react-unicons";



export const SidebarData = [
    {
        path:"/dashboard",
        icon: UilEstate,
        heading: "Dashboard",
    },

    {
        path:"/orders",
        icon: UilClipboardAlt,
        heading: "Orders",
    },

    {
        path:"/customers",
        icon: UilUsersAlt,
        heading: "Customers",
    },

    {
        path:"/projects",
        icon: UilPackage,
        heading: "Products",
    },

    {
        path:"/analytics",
        icon: UilChart,
        heading: "Analytics",
    }
];

export const CardsData = [
    {
        title: "sales",
        color: {
            backGround: "linear-gradient(rgb(141, 0, 255) 0%, rgb(27, 0, 47) 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25, 970",
        png: UilUsdSquare,
        series:[
            {
               name: "Sales",
               data: [31,40,28,51,42,109,100], 
            },
        ],
    },
    {
        title: "Reports",
        color: {
            backGround: "linear-gradient(rgb(255, 230, 6) -146.42%, rgb(145, 130, 0) 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25, 970",
        png: UilUsdSquare,
        series:[
            {
               name: "Sales",
               data: [31,40,28,51,42,109,100], 
            },
        ],
    },

    {
        title: "Expenses",
        color: {
            backGround: "linear-gradient(rgb(255, 6, 251) -146.42%, rgb(117, 1, 44) 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25, 970",
        png: UilUsdSquare,
        series:[
            {
               name: "Sales",
               data: [31,40,28,51,42,109,100], 
            },
        ],
    },

];