State.init({
  selectedIndex: 0,
});

const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <circle cx="7" cy="7.11414" r="7" fill="white" />
    <path
      d="M6.51906 9.15225C7.9103 9.15225 9.03812 8.02443 9.03812 6.63319C9.03812 5.24196 7.9103 4.11414 6.51906 4.11414C5.12782 4.11414 4 5.24196 4 6.63319C4 8.02443 5.12782 9.15225 6.51906 9.15225Z"
      stroke="#03B172"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.26294 8.66541L10 10.2708"
      stroke="#03B172"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

const ExploreData = {
  background: "colored",
  open: true,
  title: "Explore",
  description:
    "EXPLORE on the BOS platform. This the gateway of gateways to a rich ecosystem of innovation, collaboration, and learning. Navigate through the OpenWeb and delve into a universe of endless opportunities.",
  cta: <>DISCOVER (NOW)</>,
  ctaIcon: SearchIcon,
  ctaLink: "/discover.near/widget/Search",
  relatedLinks: [
    {
      href: "/projects/built-with-bos",
      name: "Built with BOS",
      details: "check out the possibilities",
    },
    {
      href: "/projects/native-projects",
      name: "BOS Native",
      details: "see the potential",
    },
    {
      href: "/projects/bos-integration",
      name: "Integrated with BOS",
      details: "check out the possibilities",
    },
  ],
};

const LinkConnectIcon = (
  <span
    className="rounded-circle d-flex align-items-center justify-content-center"
    style={{ width: "14px", height: "14px", background: "white" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.196 5.89628C5.08588 5.82472 4.99094 5.73216 4.91659 5.6239C4.84225 5.51564 4.78995 5.39379 4.7627 5.26532C4.73544 5.13685 4.73376 5.00427 4.75775 4.87515C4.78174 4.74602 4.83093 4.62289 4.9025 4.51278L5.993 2.83628C6.06342 2.72368 6.15556 2.62623 6.26404 2.54962C6.37253 2.47301 6.49518 2.41878 6.62486 2.39009C6.75453 2.3614 6.88862 2.35882 7.01929 2.38252C7.14997 2.40621 7.27462 2.4557 7.38596 2.52809C7.49731 2.60049 7.59312 2.69433 7.6678 2.80415C7.74248 2.91397 7.79454 3.03757 7.82093 3.16773C7.84733 3.29789 7.84753 3.432 7.82153 3.56224C7.79553 3.69248 7.74385 3.81623 7.6695 3.92628L6.5795 5.60328C6.5079 5.71343 6.41529 5.80839 6.30697 5.88273C6.19865 5.95707 6.07674 6.00934 5.94821 6.03655C5.81968 6.06376 5.68705 6.06538 5.5579 6.04131C5.42875 6.01724 5.3056 5.96796 5.1955 5.89628H5.196ZM3.975 5.99728C3.80715 5.68179 3.72692 5.32708 3.74266 4.97006C3.7584 4.61305 3.86954 4.26678 4.0645 3.96728L5.1545 2.29078C5.44372 1.84608 5.89775 1.53448 6.41671 1.42454C6.93567 1.3146 7.47705 1.41531 7.92175 1.70453C8.36645 1.99375 8.67805 2.44778 8.78799 2.96674C8.89794 3.4857 8.79722 4.02708 8.508 4.47178L7.418 6.14828C7.22834 6.44015 6.96578 6.67746 6.6563 6.83676C6.34681 6.99606 6.0011 7.07183 5.65336 7.05658C5.30561 7.04133 4.96787 6.93559 4.67351 6.7498C4.37916 6.56402 4.13839 6.30463 3.975 5.99728Z"
        fill="#03B172"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.722 7.86586C2.61188 7.79429 2.51694 7.70174 2.44259 7.59348C2.36825 7.48522 2.31595 7.36337 2.2887 7.2349C2.26145 7.10643 2.25976 6.97384 2.28375 6.84472C2.30774 6.7156 2.35693 6.59247 2.4285 6.48236L3.519 4.80586C3.58942 4.69325 3.68156 4.5958 3.79004 4.51919C3.89853 4.44258 4.02119 4.38835 4.15086 4.35966C4.28053 4.33097 4.41462 4.3284 4.5453 4.3521C4.67597 4.37579 4.80062 4.42528 4.91197 4.49767C5.02331 4.57006 5.11912 4.66391 5.1938 4.77373C5.26848 4.88355 5.32054 5.00715 5.34693 5.13731C5.37333 5.26747 5.37353 5.40158 5.34753 5.53182C5.32153 5.66206 5.26985 5.78581 5.1955 5.89586L4.1055 7.57286C3.96089 7.79517 3.73389 7.95093 3.47443 8.00588C3.21498 8.06083 2.94432 8.01046 2.722 7.86586ZM1.501 7.96686C1.33315 7.65137 1.25292 7.29666 1.26866 6.93964C1.2844 6.58263 1.39554 6.23635 1.5905 5.93686L2.6805 4.26086C2.82368 4.04066 3.00882 3.85083 3.22536 3.70218C3.4419 3.55354 3.6856 3.44901 3.94254 3.39454C4.19948 3.34008 4.46463 3.33676 4.72285 3.38477C4.98107 3.43278 5.22731 3.53118 5.4475 3.67436C5.6677 3.81753 5.85753 4.00267 6.00618 4.21921C6.15482 4.43575 6.25936 4.67945 6.31382 4.93639C6.36828 5.19333 6.3716 5.45848 6.32359 5.7167C6.27558 5.97493 6.17718 6.22116 6.034 6.44136L4.944 8.11786C4.75434 8.40973 4.49178 8.64704 4.1823 8.80634C3.87281 8.96564 3.5271 9.04141 3.17936 9.02616C2.83161 9.01091 2.49387 8.90516 2.19951 8.71938C1.90516 8.5336 1.66439 8.27421 1.501 7.96686Z"
        fill="#03B172"
      />
    </svg>
  </span>
);

const LearnData = {
  background: "colored",
  title: "Learn",
  description:
    "FIND a panoply of tutorials, guides, and valuable insights on components, gateways, opportunities and much more. Gain information and grow your knowledge.",
  cta: <>DISCOVER (NOW)</>,
  ctaIcon: LinkConnectIcon,
  ctaLink: "#",
  relatedLinks: [
    {
      href: "/education/tutorials",
      name: "Tutorials",
      details: "check out the possibilities",
    },
    {
      href: "/education/code-reviews",
      name: "Code Reviews",
      details: "see the potential",
    },
    {
      href: "/education/workshops",
      name: "Workshops + Webinars",
      details: "check out the possibilities",
    },
  ],
};

const ConnectIcon = (
  <span
    className="rounded-circle bg-white d-flex align-items-center justify-content-center"
    style={{ width: 14, height: 14 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <g clipPath="url(#clip0_205_1405)">
        <path
          d="M2.00797 2.47567C1.79831 2.59929 1.55075 2.6422 1.31171 2.59636C1.07267 2.55052 0.858558 2.41907 0.709505 2.22665C0.560452 2.03423 0.486693 1.79405 0.502056 1.55114C0.517419 1.30823 0.620848 1.07926 0.792955 0.907152C0.965063 0.735045 1.19403 0.631616 1.43694 0.616253C1.67986 0.60089 1.92003 0.674648 2.11245 0.823702C2.30487 0.972755 2.43632 1.18687 2.48216 1.42591C2.52801 1.66495 2.4851 1.9125 2.36147 2.12217L3.49197 3.25217C3.64585 3.1614 3.82132 3.11373 3.99997 3.11417C4.18497 3.11417 4.35897 3.16467 4.50797 3.25267L5.63797 2.12217C5.51435 1.9125 5.47144 1.66495 5.51728 1.42591C5.56312 1.18687 5.69457 0.972755 5.88699 0.823702C6.07941 0.674648 6.31959 0.60089 6.5625 0.616253C6.80541 0.631616 7.03438 0.735045 7.20649 0.907152C7.3786 1.07926 7.48203 1.30823 7.49739 1.55114C7.51275 1.79405 7.43899 2.03423 7.28994 2.22665C7.14089 2.41907 6.92677 2.55052 6.68773 2.59636C6.44869 2.6422 6.20114 2.59929 5.99147 2.47567L4.86147 3.60617C4.9526 3.75995 5.00068 3.93541 5.00068 4.11417C5.00068 4.29292 4.9526 4.46839 4.86147 4.62217L5.99197 5.75217C6.20164 5.62855 6.44919 5.58563 6.68823 5.63148C6.92727 5.67732 7.14139 5.80877 7.29044 6.00119C7.43949 6.19361 7.51325 6.43379 7.49789 6.6767C7.48253 6.91961 7.3791 7.14858 7.20699 7.32069C7.03488 7.49279 6.80591 7.59622 6.563 7.61158C6.32009 7.62695 6.07991 7.55319 5.88749 7.40414C5.69508 7.25508 5.56362 7.04097 5.51778 6.80193C5.47194 6.56289 5.51485 6.31533 5.63847 6.10567L4.50797 4.97567C4.35415 5.06662 4.17867 5.11446 3.99997 5.11417C3.82127 5.11446 3.6458 5.06662 3.49197 4.97567L2.36197 6.10617C2.4856 6.31583 2.52851 6.56339 2.48266 6.80243C2.43682 7.04147 2.30537 7.25558 2.11295 7.40464C1.92053 7.55369 1.68036 7.62745 1.43744 7.61208C1.19453 7.59672 0.965563 7.49329 0.793455 7.32119C0.621348 7.14908 0.517919 6.92011 0.502556 6.6772C0.487193 6.43429 0.560952 6.19411 0.710005 6.00169C0.859058 5.80927 1.07317 5.67782 1.31221 5.63198C1.55125 5.58613 1.79881 5.62905 2.00847 5.75267L3.13847 4.62217C3.04753 4.46834 2.99968 4.29287 2.99997 4.11417C2.99997 3.92917 3.05047 3.75517 3.13847 3.60617L2.00797 2.47567Z"
          fill="#03B172"
        />
      </g>
      <defs>
        <clipPath id="clip0_205_1405">
          <rect
            width="8"
            height="8"
            fill="white"
            transform="translate(0 0.114258)"
          />
        </clipPath>
      </defs>
    </svg>
  </span>
);

const ConnectData = {
  background: "colored",
  title: "Connect",
  description:
    "Express yourself through your connections within the communities of each ecosystem. Cultivate a network that transcends boundaries.",
  cta: <>DISCOVER (NOW)</>,
  ctaIcon: ConnectIcon,
  ctaLink: "/community",
  relatedLinks: [
    {
      href: "/communities/developer",
      name: "Developer Communities",
      details: "check out the possibilities",
    },
    {
      href: "communities/project",
      name: "Project Communities",
      details: "see the potential",
    },
    {
      href: "/events/calendar",
      name: "Event Calendar",
      details: "check out the possibilities",
    },
  ],
};

const LinkIcon = (
  <span
    className="rounded-circle d-flex align-items-center justify-content-center"
    style={{ width: "14px", height: "14px", background: "white" }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.196 5.89628C5.08588 5.82472 4.99094 5.73216 4.91659 5.6239C4.84225 5.51564 4.78995 5.39379 4.7627 5.26532C4.73544 5.13685 4.73376 5.00427 4.75775 4.87515C4.78174 4.74602 4.83093 4.62289 4.9025 4.51278L5.993 2.83628C6.06342 2.72368 6.15556 2.62623 6.26404 2.54962C6.37253 2.47301 6.49518 2.41878 6.62486 2.39009C6.75453 2.3614 6.88862 2.35882 7.01929 2.38252C7.14997 2.40621 7.27462 2.4557 7.38596 2.52809C7.49731 2.60049 7.59312 2.69433 7.6678 2.80415C7.74248 2.91397 7.79454 3.03757 7.82093 3.16773C7.84733 3.29789 7.84753 3.432 7.82153 3.56224C7.79553 3.69248 7.74385 3.81623 7.6695 3.92628L6.5795 5.60328C6.5079 5.71343 6.41529 5.80839 6.30697 5.88273C6.19865 5.95707 6.07674 6.00934 5.94821 6.03655C5.81968 6.06376 5.68705 6.06538 5.5579 6.04131C5.42875 6.01724 5.3056 5.96796 5.1955 5.89628H5.196ZM3.975 5.99728C3.80715 5.68179 3.72692 5.32708 3.74266 4.97006C3.7584 4.61305 3.86954 4.26678 4.0645 3.96728L5.1545 2.29078C5.44372 1.84608 5.89775 1.53448 6.41671 1.42454C6.93567 1.3146 7.47705 1.41531 7.92175 1.70453C8.36645 1.99375 8.67805 2.44778 8.78799 2.96674C8.89794 3.4857 8.79722 4.02708 8.508 4.47178L7.418 6.14828C7.22834 6.44015 6.96578 6.67746 6.6563 6.83676C6.34681 6.99606 6.0011 7.07183 5.65336 7.05658C5.30561 7.04133 4.96787 6.93559 4.67351 6.7498C4.37916 6.56402 4.13839 6.30463 3.975 5.99728Z"
        fill="#03B172"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.722 7.86586C2.61188 7.79429 2.51694 7.70174 2.44259 7.59348C2.36825 7.48522 2.31595 7.36337 2.2887 7.2349C2.26145 7.10643 2.25976 6.97384 2.28375 6.84472C2.30774 6.7156 2.35693 6.59247 2.4285 6.48236L3.519 4.80586C3.58942 4.69325 3.68156 4.5958 3.79004 4.51919C3.89853 4.44258 4.02119 4.38835 4.15086 4.35966C4.28053 4.33097 4.41462 4.3284 4.5453 4.3521C4.67597 4.37579 4.80062 4.42528 4.91197 4.49767C5.02331 4.57006 5.11912 4.66391 5.1938 4.77373C5.26848 4.88355 5.32054 5.00715 5.34693 5.13731C5.37333 5.26747 5.37353 5.40158 5.34753 5.53182C5.32153 5.66206 5.26985 5.78581 5.1955 5.89586L4.1055 7.57286C3.96089 7.79517 3.73389 7.95093 3.47443 8.00588C3.21498 8.06083 2.94432 8.01046 2.722 7.86586ZM1.501 7.96686C1.33315 7.65137 1.25292 7.29666 1.26866 6.93964C1.2844 6.58263 1.39554 6.23635 1.5905 5.93686L2.6805 4.26086C2.82368 4.04066 3.00882 3.85083 3.22536 3.70218C3.4419 3.55354 3.6856 3.44901 3.94254 3.39454C4.19948 3.34008 4.46463 3.33676 4.72285 3.38477C4.98107 3.43278 5.22731 3.53118 5.4475 3.67436C5.6677 3.81753 5.85753 4.00267 6.00618 4.21921C6.15482 4.43575 6.25936 4.67945 6.31382 4.93639C6.36828 5.19333 6.3716 5.45848 6.32359 5.7167C6.27558 5.97493 6.17718 6.22116 6.034 6.44136L4.944 8.11786C4.75434 8.40973 4.49178 8.64704 4.1823 8.80634C3.87281 8.96564 3.5271 9.04141 3.17936 9.02616C2.83161 9.01091 2.49387 8.90516 2.19951 8.71938C1.90516 8.5336 1.66439 8.27421 1.501 7.96686Z"
        fill="#03B172"
      />
    </svg>
  </span>
);

const BuildData = {
  background: "colored",
  title: "Build",
  description:
    "Take advantage of our developer community and programs to innovate and bring your ideas to life. Contribute to the future of the open web.",
  cta: <>DISCOVER (NOW)</>,
  ctaIcon: LinkIcon,
  ctaLink: "#",
  relatedLinks: [
    {
      href: "/education/tutorials",
      name: "Tutorials",
      details: "Step-by-step instructional guides",
    },
    {
      href: "/education/code-reviews",
      name: "Code Reviews",
      details: "Evaluations of code quality and functionality",
    },
    {
      href: "/education/workshops",
      name: "Webinars & Workshops",
      details:
        "Immersive learning experiences and  engaging sessions to gain valuable information.",
    },
  ],
};

const InfoSections = [ExploreData, LearnData, ConnectData, BuildData];

const WorldIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        d="M16.2684 3.11426C13.6972 3.11426 11.1838 3.87669 9.04596 5.30515C6.90813 6.73361 5.24188 8.76393 4.25794 11.1394C3.274 13.5148 3.01656 16.1287 3.51817 18.6504C4.01978 21.1722 5.25791 23.4886 7.07599 25.3066C8.89407 27.1247 11.2105 28.3629 13.7322 28.8645C16.254 29.3661 18.8678 29.1086 21.2433 28.1247C23.6187 27.1408 25.649 25.4745 27.0775 23.3367C28.5059 21.1988 29.2684 18.6854 29.2684 16.1143C29.2647 12.6676 27.8939 9.36307 25.4567 6.92589C23.0196 4.48871 19.7151 3.1179 16.2684 3.11426ZM12.9721 21.1143H19.5646C18.8934 23.4068 17.7684 25.473 16.2684 27.1005C14.7684 25.473 13.6434 23.4068 12.9721 21.1143ZM12.5184 19.1143C12.1867 17.128 12.1867 15.1005 12.5184 13.1143H20.0184C20.35 15.1005 20.35 17.128 20.0184 19.1143H12.5184ZM5.26838 16.1143C5.26751 15.0998 5.4076 14.0902 5.68463 13.1143H10.4921C10.1938 15.1031 10.1938 17.1254 10.4921 19.1143H5.68463C5.4076 18.1384 5.26751 17.1287 5.26838 16.1143ZM19.5646 11.1143H12.9721C13.6434 8.82176 14.7684 6.75551 16.2684 5.12801C17.7684 6.75551 18.8934 8.82176 19.5646 11.1143ZM22.0446 13.1143H26.8521C27.4071 15.0758 27.4071 17.1528 26.8521 19.1143H22.0446C22.343 17.1254 22.343 15.1031 22.0446 13.1143ZM26.0646 11.1143H21.6359C21.1255 9.10615 20.2685 7.20256 19.1034 5.48926C20.5919 5.88928 21.9803 6.59641 23.1792 7.56517C24.3781 8.53393 25.361 9.74287 26.0646 11.1143ZM13.4334 5.48926C12.2682 7.20256 11.4112 9.10615 10.9009 11.1143H6.47213C7.17579 9.74287 8.15866 8.53393 9.35756 7.56517C10.5564 6.59641 11.9448 5.88928 13.4334 5.48926ZM6.47213 21.1143H10.9009C11.4112 23.1224 12.2682 25.026 13.4334 26.7393C11.9448 26.3392 10.5564 25.6321 9.35756 24.6633C8.15866 23.6946 7.17579 22.4856 6.47213 21.1143ZM19.1034 26.7393C20.2685 25.026 21.1255 23.1224 21.6359 21.1143H26.0646C25.361 22.4856 24.3781 23.6946 23.1792 24.6633C21.9803 25.6321 20.5919 26.3392 19.1034 26.7393Z"
        fill="black"
      />
    </svg>
  );
};

const LearnIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M37.2211 4.58289H13.3148C11.823 4.58289 10.3922 5.17552 9.33734 6.23041C8.28245 7.2853 7.68982 8.71604 7.68982 10.2079V39.7391C7.68982 40.1121 7.83798 40.4698 8.1017 40.7335C8.36542 40.9972 8.72311 41.1454 9.09607 41.1454H34.4086C34.7815 41.1454 35.1392 40.9972 35.4029 40.7335C35.6667 40.4698 35.8148 40.1121 35.8148 39.7391C35.8148 39.3662 35.6667 39.0085 35.4029 38.7448C35.1392 38.481 34.7815 38.3329 34.4086 38.3329H10.5023C10.5023 37.587 10.7986 36.8716 11.3261 36.3441C11.8535 35.8167 12.5689 35.5204 13.3148 35.5204H37.2211C37.594 35.5204 37.9517 35.3722 38.2154 35.1085C38.4792 34.8448 38.6273 34.4871 38.6273 34.1141V5.98914C38.6273 5.61618 38.4792 5.25849 38.2154 4.99477C37.9517 4.73104 37.594 4.58289 37.2211 4.58289ZM33.0023 21.4579L28.5006 18.0829C28.3789 17.9916 28.2308 17.9423 28.0787 17.9423C27.9266 17.9423 27.7785 17.9916 27.6568 18.0829L23.1586 21.4579V7.39539H33.0023V21.4579Z"
        fill="black"
      />
    </svg>
  );
};

const BuildIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M35.8148 27.5829C34.5718 27.5822 33.364 27.9953 32.3818 28.7571L28.3195 25.593C28.6262 24.89 28.7841 24.1311 28.7835 23.3641C28.7835 23.234 28.7835 23.104 28.7695 22.9756L31.0951 22.2004C31.8308 23.3352 32.9508 24.1669 34.2497 24.5431C35.5487 24.9194 36.9398 24.8151 38.1681 24.2493C39.3965 23.6835 40.3799 22.6941 40.9381 21.4623C41.4964 20.2305 41.5922 18.8388 41.208 17.5421C40.8238 16.2455 39.9852 15.1306 38.846 14.4019C37.7068 13.6731 36.3431 13.3791 35.0048 13.5739C33.6665 13.7686 32.4432 14.439 31.5589 15.4622C30.6746 16.4854 30.1886 17.793 30.1898 19.1454C30.1898 19.2754 30.1898 19.4055 30.2038 19.5338L27.8783 20.309C27.3685 19.5209 26.6695 18.8729 25.8451 18.424C25.0208 17.9751 24.0972 17.7397 23.1585 17.7391C22.8482 17.7398 22.5383 17.7656 22.2322 17.8165L21.0298 15.1024C22.068 14.2729 22.779 13.1026 23.0367 11.7989C23.2945 10.4952 23.0824 9.14243 22.438 7.98023C21.7936 6.81803 20.7585 5.92151 19.5162 5.44957C18.274 4.97762 16.9047 4.96073 15.6512 5.40189C14.3977 5.84305 13.3408 6.71378 12.6679 7.85973C11.9951 9.00568 11.7496 10.3529 11.9752 11.6625C12.2007 12.9721 12.8826 14.1596 13.9 15.0145C14.9174 15.8693 16.2046 16.3364 17.5335 16.3329C17.8439 16.3322 18.1537 16.3064 18.4599 16.2555L19.6622 18.9626C18.6426 19.7695 17.935 20.9056 17.6602 22.1765C17.3854 23.4475 17.5606 24.7744 18.1558 25.9305L13.6365 29.9454C12.4991 29.1786 11.1212 28.853 9.76096 29.0295C8.40072 29.2061 7.15156 29.8726 6.24761 30.9043C5.34367 31.9359 4.84701 33.2619 4.85073 34.6335C4.85444 36.0051 5.35828 37.3283 6.2678 38.3551C7.17732 39.3818 8.43008 40.0416 9.79125 40.2108C11.1524 40.3799 12.5286 40.0468 13.6617 39.2739C14.7949 38.5011 15.6073 37.3414 15.9466 36.0124C16.286 34.6834 16.1289 33.2763 15.505 32.0547L20.0244 28.0399C21.0029 28.6987 22.1642 29.0323 23.3432 28.9932C24.5222 28.9541 25.6589 28.5442 26.5915 27.8219L30.6538 30.986C30.3481 31.6869 30.1901 32.4432 30.1898 33.2079C30.1898 34.3204 30.5197 35.4079 31.1378 36.333C31.7558 37.258 32.6344 37.979 33.6622 38.4047C34.69 38.8304 35.821 38.9418 36.9122 38.7248C38.0033 38.5077 39.0056 37.972 39.7923 37.1853C40.5789 36.3987 41.1147 35.3964 41.3317 34.3053C41.5487 33.2141 41.4374 32.0831 41.0116 31.0553C40.5859 30.0274 39.8649 29.1489 38.9399 28.5309C38.0148 27.9128 36.9273 27.5829 35.8148 27.5829ZM35.8148 16.3329C36.371 16.3329 36.9148 16.4978 37.3773 16.8069C37.8398 17.1159 38.2003 17.5552 38.4132 18.0691C38.6261 18.583 38.6818 19.1485 38.5732 19.6941C38.4647 20.2396 38.1969 20.7408 37.8035 21.1341C37.4102 21.5274 36.909 21.7953 36.3635 21.9038C35.8179 22.0123 35.2524 21.9566 34.7385 21.7438C34.2246 21.5309 33.7853 21.1704 33.4763 20.7079C33.1672 20.2454 33.0023 19.7016 33.0023 19.1454C33.0023 18.3994 33.2986 17.6841 33.826 17.1566C34.3535 16.6292 35.0689 16.3329 35.8148 16.3329ZM14.721 10.7079C14.721 10.1516 14.886 9.60784 15.195 9.14533C15.5041 8.68281 15.9433 8.32233 16.4572 8.10945C16.9712 7.89658 17.5367 7.84089 18.0822 7.94941C18.6278 8.05793 19.1289 8.32579 19.5223 8.71913C19.9156 9.11246 20.1835 9.6136 20.292 10.1592C20.4005 10.7047 20.3448 11.2702 20.1319 11.7842C19.9191 12.2981 19.5586 12.7373 19.0961 13.0464C18.6336 13.3554 18.0898 13.5204 17.5335 13.5204C16.7876 13.5204 16.0722 13.2241 15.5448 12.6966C15.0173 12.1692 14.721 11.4538 14.721 10.7079ZM10.5023 37.4266C9.94602 37.4266 9.40225 37.2617 8.93974 36.9526C8.47723 36.6436 8.11674 36.2043 7.90387 35.6904C7.691 35.1765 7.6353 34.611 7.74382 34.0654C7.85234 33.5199 8.12021 33.0187 8.51354 32.6254C8.90688 32.232 9.40802 31.9642 9.95359 31.8557C10.4992 31.7471 11.0647 31.8028 11.5786 32.0157C12.0925 32.2286 12.5317 32.5891 12.8408 33.0516C13.1498 33.5141 13.3148 34.0579 13.3148 34.6141C13.3148 35.36 13.0185 36.0754 12.491 36.6029C11.9636 37.1303 11.2482 37.4266 10.5023 37.4266ZM35.8148 36.0204C35.2585 36.0204 34.7148 35.8554 34.2522 35.5464C33.7897 35.2373 33.4292 34.7981 33.2164 34.2842C33.0035 33.7703 32.9478 33.2048 33.0563 32.6592C33.1648 32.1136 33.4327 31.6125 33.826 31.2191C34.2194 30.8258 34.7205 30.5579 35.2661 30.4494C35.8117 30.3409 36.3772 30.3966 36.8911 30.6095C37.405 30.8223 37.8442 31.1828 38.1533 31.6453C38.4623 32.1078 38.6273 32.6516 38.6273 33.2079C38.6273 33.9538 38.331 34.6692 37.8035 35.1966C37.2761 35.7241 36.5607 36.0204 35.8148 36.0204Z"
        fill="black"
      />
    </svg>
  );
};

const ConnectSectionIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <g clipPath="url(#clip0_357_1276)">
        <path
          opacity="0.2"
          d="M36.4044 33.512C37.2221 30.3141 36.7531 26.9232 35.0984 24.0673L31.7585 18.2823C31.6991 18.1759 31.6333 18.0732 31.5616 17.9747L29.839 15.3784L30.9939 17.3876C30.4281 16.9394 29.7261 16.6982 29.0043 16.704C28.2826 16.7097 27.5845 16.962 27.0259 17.419C26.4672 17.8761 26.0816 18.5104 25.9331 19.2167C25.7845 19.923 25.8819 20.6589 26.2091 21.3022L22.0695 14.1374L20.1359 11.2352L21.296 13.2462C20.7393 12.798 20.0473 12.5515 19.3326 12.5469C18.6179 12.5422 17.9228 12.7796 17.3602 13.2205C16.7977 13.6613 16.401 14.2796 16.2347 14.9747C16.0684 15.6697 16.1424 16.4006 16.4445 17.0483L16.4339 17.0571L15.1683 14.8651L14.4036 13.9756L13.247 11.9647C12.8274 11.2379 12.7137 10.3742 12.931 9.56357C13.1482 8.75295 13.6786 8.06183 14.4054 7.64225C15.1322 7.22267 15.9959 7.109 16.8065 7.32624C17.6172 7.54348 18.3083 8.07384 18.7279 8.80065L19.9935 10.9926L20.1359 11.2352C19.9281 10.8753 19.7933 10.4781 19.739 10.0661C19.6848 9.65409 19.7123 9.23546 19.8199 8.83408C19.9274 8.4327 20.113 8.05644 20.366 7.72678C20.6189 7.39712 20.9344 7.12051 21.2943 6.91276C21.6541 6.705 22.0514 6.57017 22.4634 6.51594C22.8754 6.46172 23.294 6.48918 23.6954 6.59675C24.0968 6.70432 24.473 6.88989 24.8027 7.14287C25.1324 7.39585 25.409 7.71128 25.6167 8.07116L29.8355 15.3784C29.4159 14.6516 29.3022 13.7879 29.5195 12.9772C29.7367 12.1666 30.2671 11.4755 30.9939 11.0559C31.7207 10.6363 32.5844 10.5227 33.395 10.7399C34.2056 10.9572 34.8967 11.4875 35.3163 12.2143L38.6562 17.9993C40.0782 20.462 40.6294 23.3319 40.2209 26.1462C39.8124 28.9605 38.468 31.5552 36.4044 33.512Z"
          fill="#03B172"
        />
        <path
          d="M30.5069 5.08289V2.27039C30.5069 1.89743 30.6551 1.53974 30.9188 1.27602C31.1825 1.01229 31.5402 0.864136 31.9132 0.864136C32.2861 0.864136 32.6438 1.01229 32.9076 1.27602C33.1713 1.53974 33.3194 1.89743 33.3194 2.27039V5.08289C33.3194 5.45585 33.1713 5.81353 32.9076 6.07725C32.6438 6.34098 32.2861 6.48914 31.9132 6.48914C31.5402 6.48914 31.1825 6.34098 30.9188 6.07725C30.6551 5.81353 30.5069 5.45585 30.5069 5.08289ZM36.8052 8.07117C37.0263 8.2042 37.2801 8.27298 37.5382 8.2698C37.7795 8.27018 38.0169 8.20845 38.2275 8.09054C38.438 7.97263 38.6147 7.80252 38.7405 7.59656L40.1468 5.29207C40.2446 5.13437 40.3103 4.95886 40.34 4.77566C40.3697 4.59246 40.3629 4.40519 40.3198 4.22465C40.2768 4.04412 40.1985 3.87388 40.0894 3.72376C39.9803 3.57364 39.8425 3.4466 39.684 3.34997C39.5256 3.25335 39.3496 3.18904 39.1661 3.16076C38.9827 3.13249 38.7955 3.1408 38.6153 3.18522C38.4351 3.22964 38.2655 3.30929 38.1162 3.41957C37.967 3.52986 37.841 3.66861 37.7456 3.82781L36.3394 6.13054C36.2419 6.28837 36.1766 6.46392 36.1472 6.64709C36.1179 6.83026 36.125 7.01743 36.1683 7.19781C36.2116 7.37819 36.2902 7.54823 36.3995 7.69812C36.5088 7.84801 36.6467 7.97479 36.8052 8.07117ZM39.8708 17.305C41.4256 19.9793 42.0517 23.0931 41.6514 26.1606C41.2511 29.228 39.8468 32.0768 37.6577 34.2626C36.8982 36.9169 35.3741 39.289 33.2755 41.083C31.1768 42.877 28.5966 44.0135 25.8563 44.3509C23.1161 44.6883 20.3372 44.2117 17.8661 42.9803C15.395 41.749 13.341 39.8175 11.9603 37.4266L5.80791 26.769C5.43227 26.1175 5.22323 25.3833 5.19933 24.6316C5.17543 23.8799 5.33741 23.1339 5.6709 22.4598C6.00438 21.7857 6.49908 21.2043 7.1111 20.7672C7.72312 20.33 8.43356 20.0507 9.1794 19.954L8.47627 18.7341C8.10646 18.0935 7.89765 17.3727 7.86776 16.6337C7.83788 15.8946 7.98781 15.1594 8.3047 14.491C8.62158 13.8227 9.09594 13.2412 9.68705 12.7966C10.2782 12.352 10.9683 12.0575 11.6983 11.9384C11.3322 10.9302 11.3323 9.82533 11.6987 8.81722C12.065 7.80912 12.7743 6.96198 13.7022 6.4241C14.5532 5.9346 15.5389 5.73154 16.514 5.84484C17.4891 5.95815 18.402 6.38183 19.1181 7.05339C19.5566 6.42032 20.1481 5.90835 20.8374 5.565C21.5268 5.22166 22.2917 5.05809 23.0612 5.08948C23.8307 5.12087 24.5798 5.3462 25.2389 5.74455C25.8981 6.14291 26.4458 6.70136 26.8314 7.36804L28.9407 11.0225C29.3974 10.4245 29.9947 9.94849 30.6796 9.63675C31.3645 9.32502 32.1157 9.1872 32.8666 9.23555C33.6175 9.2839 34.3449 9.5169 34.9841 9.91389C35.6234 10.3109 36.1547 10.8595 36.531 11.5112L39.8708 17.305ZM21.3522 10.5321L22.3946 12.3374C22.7427 12.6552 23.0392 13.0253 23.2735 13.4343L25.3829 17.0817C26.0762 16.1813 27.0779 15.569 28.1954 15.3626L24.3968 8.77429C24.1637 8.37057 23.7797 8.07598 23.3294 7.95533C22.8791 7.83468 22.3993 7.89784 21.9956 8.13093C21.5919 8.36404 21.2973 8.74797 21.1766 9.19828C21.056 9.64858 21.1192 10.1284 21.3522 10.5321ZM14.4651 11.2616L15.5075 13.0686L15.5638 13.1196C15.9048 12.6258 16.34 12.2043 16.8443 11.8791C17.3487 11.5539 17.9123 11.3315 18.5028 11.2247L17.5097 9.50378C17.3359 9.20267 17.0767 8.95985 16.7649 8.80604C16.4531 8.65224 16.1027 8.59435 15.758 8.63969C15.4133 8.68504 15.0898 8.83158 14.8283 9.0608C14.5669 9.29001 14.3794 9.5916 14.2894 9.92742C14.2288 10.1504 14.2132 10.3831 14.2434 10.6121C14.2735 10.8412 14.3489 11.0619 14.4651 11.2616ZM33.8802 24.7704L30.5403 18.9854C30.3132 18.596 29.9451 18.3087 29.5121 18.183C29.0792 18.0573 28.6145 18.1027 28.2141 18.3099C27.8137 18.5171 27.5082 18.8702 27.3608 19.2963C27.2134 19.7223 27.2353 20.1887 27.422 20.5991L29.4294 24.0673C29.6159 24.3906 29.6663 24.7747 29.5695 25.1352C29.4728 25.4957 29.2368 25.8029 28.9135 25.9894C28.5902 26.1759 28.206 26.2263 27.8455 26.1296C27.4851 26.0328 27.1778 25.7968 26.9913 25.4735L20.839 14.844C20.5976 14.4618 20.2183 14.1873 19.7798 14.0775C19.3413 13.9677 18.8773 14.031 18.4843 14.2543C18.0913 14.4776 17.7994 14.8438 17.6693 15.2767C17.5392 15.7096 17.5809 16.176 17.7856 16.579L22.1151 24.0673C22.2133 24.2273 22.2784 24.4055 22.3067 24.5911C22.3349 24.7768 22.3256 24.9662 22.2795 25.1482C22.2333 25.3302 22.1511 25.5012 22.0378 25.6509C21.9245 25.8007 21.7824 25.9262 21.6197 26.0202C21.4571 26.1141 21.2774 26.1745 21.091 26.1978C20.9047 26.2211 20.7156 26.2069 20.5348 26.156C20.3541 26.105 20.1854 26.0184 20.0387 25.9012C19.8919 25.7839 19.7702 25.6385 19.6806 25.4735L13.9554 15.57C13.8408 15.3685 13.6875 15.1916 13.5043 15.0496C13.3211 14.9075 13.1116 14.8031 12.8878 14.7424C12.6641 14.6817 12.4306 14.6658 12.2007 14.6957C11.9708 14.7255 11.7491 14.8006 11.5484 14.9165C11.3476 15.0324 11.1717 15.1869 11.0309 15.371C10.8901 15.5552 10.7871 15.7654 10.7279 15.9895C10.6686 16.2136 10.6543 16.4473 10.6857 16.6769C10.7171 16.9066 10.7936 17.1278 10.9108 17.3278L17.239 28.2895C17.3313 28.4495 17.3912 28.6261 17.4153 28.8092C17.4394 28.9923 17.4272 29.1784 17.3794 29.3568C17.3315 29.5352 17.249 29.7025 17.1366 29.849C17.0241 29.9955 16.8839 30.1185 16.7239 30.2108C16.564 30.3032 16.3874 30.3631 16.2042 30.3872C16.0211 30.4113 15.835 30.399 15.6566 30.3512C15.4782 30.3034 15.311 30.2209 15.1644 30.1084C15.0179 29.996 14.895 29.8557 14.8026 29.6958L11.287 23.6067C11.0523 23.2063 10.6686 22.9149 10.2199 22.7963C9.77112 22.6777 9.29364 22.7413 8.89165 22.9734C8.48966 23.2055 8.19579 23.5872 8.07417 24.0352C7.95255 24.4831 8.01306 24.961 8.24248 25.3645L14.3948 36.0221C15.1302 37.308 16.1122 38.436 17.2846 39.3413C18.457 40.2467 19.7966 40.9116 21.2266 41.2979C22.6566 41.6842 24.1489 41.7843 25.6177 41.5925C27.0864 41.4007 28.5029 40.9206 29.7857 40.18C31.0685 39.4394 32.1924 38.4527 33.093 37.2766C33.9935 36.1005 34.6529 34.7581 35.0333 33.3265C35.4137 31.895 35.5077 30.4023 35.3098 28.9343C35.1119 27.4664 34.6261 26.0519 33.8802 24.7721V24.7704ZM37.4345 18.7042L34.0946 12.9192C33.8599 12.5188 33.4763 12.2274 33.0275 12.1088C32.5787 11.9902 32.1013 12.0538 31.6993 12.2859C31.2973 12.518 31.0034 12.8997 30.8818 13.3477C30.7602 13.7956 30.8207 14.2735 31.0501 14.677L32.089 16.4788C32.4369 16.7981 32.7334 17.1693 32.9679 17.5792L36.3077 23.3641C37.2461 24.986 37.8515 26.7788 38.0884 28.6376C38.7512 27.0432 39.037 25.3173 38.9236 23.5944C38.8102 21.8714 38.3006 20.1979 37.4345 18.7042ZM45.1442 10.2772C45.0876 10.1014 44.9969 9.93851 44.8772 9.79778C44.7576 9.65705 44.6114 9.54127 44.4471 9.45704C44.2827 9.37281 44.1033 9.32179 43.9192 9.30689C43.7351 9.29199 43.5499 9.3135 43.3741 9.37019L40.7374 10.2227C40.4177 10.3249 40.1452 10.5381 39.9689 10.8237C39.7927 11.1093 39.7244 11.4485 39.7764 11.7801C39.8284 12.1116 39.9973 12.4137 40.2525 12.6316C40.5077 12.8495 40.8325 12.969 41.1681 12.9684C41.3149 12.9679 41.4607 12.9447 41.6005 12.8999L44.2372 12.0473C44.413 11.9907 44.5759 11.9 44.7167 11.7803C44.8574 11.6607 44.9732 11.5145 45.0574 11.3502C45.1416 11.1858 45.1926 11.0064 45.2075 10.8223C45.2224 10.6382 45.2009 10.453 45.1442 10.2772Z"
          fill="#1B1B18"
        />
      </g>
      <defs>
        <clipPath id="clip0_357_1276">
          <rect
            width="45"
            height="45"
            fill="white"
            transform="translate(0.975708 0.864136)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Box = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 8px;
  border: 3px solid #afafaf;
  background: #fff;

  width: 222px;
  height: 174.5px;

  cursor: pointer;
  transition: all 300ms;

  p {
    color: #1b1b18;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120.5%; /* 28.92px */
  }

  svg {
    width: 45px;
    height: 45px;
  }

  &:hover {
    svg {
      transition: all 300ms;
      filter: invert(42%) sepia(97%) saturate(649%) hue-rotate(117deg)
        brightness(97%) contrast(98%);
    }
  }

  &.selected-index {
    svg {
      filter: invert(42%) sepia(97%) saturate(649%) hue-rotate(117deg)
        brightness(97%) contrast(98%);
    }

    border: 3px solid #03b071;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;

  @media (width <= 800px) {
    display: none;
  }
`;

const listItems = [
  { name: "Explore", icon: <WorldIcon /> },
  { name: "Learn", icon: <LearnIcon /> },
  { name: "Connect", icon: <ConnectSectionIcon /> },
  { name: "Build", icon: <BuildIcon /> },
];

const Switcher = () => {
  return (
    <Container>
      {listItems.map((it, index) => (
        <Box
          key={`box-${Math.random()}`}
          className={index === state.selectedIndex && "selected-index"}
          onClick={() => State.update({ selectedIndex: index })}
        >
          {it.icon}
          <p className="m-0">{it.name}</p>
        </Box>
      ))}
    </Container>
  );
};

const Desktop = styled.div`
  @media (width <= 800px) {
    display: none !important;
  }
`;

const Mobile = styled.div`
  display: none;

  @media (width <= 800px) {
    background: #f4fdfa;
    padding: 60px 16px;

    display: flex;
    flex-direction: column;
  }
`;

const MobileInfoSections = [
  { data: ExploreData, icon: <WorldIcon /> },
  { data: LearnData, icon: <LearnIcon /> },
  { data: ConnectData, icon: <ConnectSectionIcon /> },
  { data: BuildData, icon: <BuildIcon /> },
];

const MobileSwitcher = ({ index, selected }) => {
  const Switcher = () => {
    const Container = styled.div`
      border-radius: 8px;
      border: 1px solid #afafaf;
      background: #fff;
      display: flex;
      padding: 16px;
      align-items: center;
      gap: 16px;
    `;

    const Heading = styled.h2`
      color: #1b1b18;
      font-family: Mona Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 120.5%; /* 28.92px */
    `;

    return (
      <Container key={`MobileSwitcher-${Math.random()}`}>
        {/* <WorldIcon /> */}
        {MobileInfoSections[index].icon}
        <Heading className="m-0 flex-grow-1">
          {MobileInfoSections[index].data.title}
        </Heading>
        <i className="bi bi-chevron-up"></i>
      </Container>
    );
  };

  return (
    <div key={Math.random()}>
      <Widget
        src="discover.near/widget/HomeSection"
        props={{
          data: { ...InfoSections[index], mobile: true },
          mobileSwitcher: Switcher,
        }}
      />
    </div>
  );
};

return (
  <>
    <Desktop className="d-flex align-items-center">
      <Widget
        src="discover.near/widget/HomeSection"
        props={{
          data: { ...InfoSections[state.selectedIndex] },
          switcher: Switcher,
        }}
      />
    </Desktop>
    <Mobile key={Math.random()}>
      {InfoSections.map((_, index) => (
        <MobileSwitcher index={index} key={`Mobile-${Math.random()}`} />
      ))}
    </Mobile>
  </>
);
