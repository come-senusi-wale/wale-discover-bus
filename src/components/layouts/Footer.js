import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="19"
      viewBox="0 0 120 19"
      fill="none"
    >
      <g clipPath="url(#clip0_364_14702)">
        <path
          d="M78.408 1.822H83.905C84.8192 1.822 85.6646 1.94739 86.4412 2.19818C87.2259 2.44896 87.857 2.86155 88.3343 3.43593C88.8196 4.00222 89.0623 4.77076 89.0623 5.74155C89.0623 6.38065 88.941 6.95099 88.6983 7.45256C88.4637 7.95413 88.1482 8.36672 87.7518 8.69031C87.3635 9.00582 86.9387 9.21616 86.4776 9.32132C86.8821 9.36986 87.2745 9.48717 87.6547 9.67323C88.043 9.85121 88.3909 10.102 88.6983 10.4256C89.0138 10.7411 89.2605 11.1375 89.4385 11.6148C89.6246 12.084 89.7176 12.6422 89.7176 13.2894C89.7176 14.1874 89.5154 14.9802 89.1109 15.6678C88.7145 16.3474 88.132 16.8813 87.3635 17.2696C86.603 17.6499 85.6686 17.84 84.5603 17.84H78.408V1.822ZM82.0363 14.9398H83.6866C84.2044 14.9398 84.625 14.8629 84.9486 14.7092C85.2803 14.5474 85.523 14.3209 85.6767 14.0296C85.8304 13.7303 85.9073 13.3744 85.9073 12.9618C85.9073 12.3146 85.705 11.8413 85.3005 11.542C84.9041 11.2346 84.3459 11.0809 83.6259 11.0809H82.0363V14.9398ZM82.0363 8.24132H83.5046C83.9334 8.24132 84.2893 8.16447 84.5725 8.01076C84.8637 7.85705 85.0821 7.64267 85.2277 7.36762C85.3814 7.08447 85.4583 6.76087 85.4583 6.39683C85.4583 5.74155 85.2722 5.30065 84.9001 5.07413C84.528 4.83953 84.0183 4.72222 83.3711 4.72222H82.0363V8.24132ZM94.4037 9.81885C94.4037 10.733 94.5898 11.5622 94.9619 12.3065C95.3421 13.0427 95.8639 13.6292 96.5273 14.066C97.1987 14.5029 97.9754 14.7213 98.8572 14.7213C99.739 14.7213 100.512 14.5029 101.175 14.066C101.846 13.6292 102.368 13.0427 102.74 12.3065C103.121 11.5622 103.311 10.733 103.311 9.81885C103.311 8.90469 103.121 8.07953 102.74 7.34335C102.368 6.60717 101.846 6.02065 101.175 5.5838C100.512 5.13885 99.739 4.91638 98.8572 4.91638C97.9754 4.91638 97.1987 5.13885 96.5273 5.5838C95.8639 6.02065 95.3421 6.60717 94.9619 7.34335C94.5898 8.07953 94.4037 8.90469 94.4037 9.81885ZM90.6298 9.81885C90.6298 8.65391 90.8361 7.56986 91.2486 6.56672C91.6612 5.55548 92.2396 4.67368 92.9839 3.92132C93.7282 3.16896 94.6019 2.58245 95.605 2.16177C96.6082 1.7411 97.6922 1.53076 98.8572 1.53076C100.038 1.53076 101.126 1.7411 102.121 2.16177C103.125 2.58245 103.994 3.16896 104.73 3.92132C105.475 4.67368 106.049 5.55548 106.454 6.56672C106.866 7.56986 107.072 8.65391 107.072 9.81885C107.072 10.9919 106.874 12.084 106.478 13.0953C106.081 14.0984 105.515 14.9802 104.779 15.7406C104.043 16.493 103.173 17.0795 102.17 17.5002C101.167 17.9209 100.063 18.1312 98.8572 18.1312C97.6275 18.1312 96.5071 17.9209 95.4958 17.5002C94.4927 17.0795 93.6271 16.493 92.899 15.7406C92.1709 14.9802 91.6086 14.0984 91.2122 13.0953C90.8239 12.084 90.6298 10.9919 90.6298 9.81885ZM114.261 1.53076C115.256 1.53076 116.126 1.63998 116.87 1.8584C117.614 2.07683 118.213 2.30739 118.666 2.55009C119.119 2.79278 119.394 2.95458 119.491 3.03548L117.744 5.95998C117.614 5.8629 117.392 5.72132 117.076 5.53526C116.769 5.34919 116.401 5.18335 115.972 5.03773C115.551 4.89211 115.11 4.8193 114.649 4.8193C114.026 4.8193 113.521 4.93256 113.132 5.15908C112.752 5.3775 112.562 5.70514 112.562 6.142C112.562 6.44132 112.663 6.71233 112.865 6.95503C113.076 7.18964 113.391 7.41616 113.812 7.63458C114.241 7.84492 114.783 8.07548 115.438 8.32627C116.037 8.54469 116.599 8.80357 117.125 9.1029C117.651 9.40222 118.112 9.75818 118.508 10.1708C118.913 10.5753 119.232 11.0445 119.467 11.5784C119.701 12.1123 119.819 12.7191 119.819 13.3986C119.819 14.2076 119.653 14.9114 119.321 15.5101C118.99 16.1006 118.537 16.5901 117.962 16.9784C117.396 17.3667 116.749 17.6539 116.021 17.84C115.301 18.0341 114.552 18.1312 113.776 18.1312C112.675 18.1312 111.688 18.0058 110.815 17.755C109.949 17.5042 109.249 17.2332 108.715 16.942C108.181 16.6508 107.862 16.4566 107.757 16.3595L109.565 13.3137C109.662 13.3865 109.848 13.5038 110.123 13.6656C110.406 13.8274 110.75 13.9973 111.154 14.1753C111.559 14.3451 111.988 14.4908 112.441 14.6121C112.902 14.7335 113.355 14.7941 113.8 14.7941C114.544 14.7941 115.102 14.6526 115.474 14.3694C115.847 14.0782 116.033 13.698 116.033 13.2287C116.033 12.8809 115.915 12.5694 115.681 12.2944C115.446 12.0193 115.094 11.7604 114.625 11.5177C114.156 11.2669 113.569 11.004 112.865 10.729C112.162 10.4458 111.502 10.102 110.888 9.6975C110.281 9.29301 109.787 8.78739 109.407 8.18065C109.027 7.57391 108.837 6.82155 108.837 5.92357C108.837 5.02559 109.088 4.24896 109.589 3.59368C110.099 2.93031 110.766 2.42065 111.591 2.06469C112.425 1.70874 113.314 1.53076 114.261 1.53076Z"
          fill="#00BF63"
        />
        <path
          d="M5.06594 18.1311C4.10324 18.1311 3.26594 17.8965 2.55403 17.4273C1.84212 16.95 1.28796 16.3149 0.891554 15.5221C0.503239 14.7212 0.309082 13.8354 0.309082 12.8646C0.309082 11.8938 0.503239 11.012 0.891554 10.2192C1.28796 9.41829 1.84212 8.77919 2.55403 8.30188C3.26594 7.82458 4.10324 7.58593 5.06594 7.58593C5.70504 7.58593 6.27133 7.68705 6.76481 7.8893C7.2583 8.08346 7.65874 8.31806 7.96616 8.59312C8.27358 8.86009 8.45964 9.10683 8.52436 9.33335V1.14233H12.2134V17.8399H8.56077V16.2259C8.40706 16.5253 8.15627 16.8246 7.80841 17.1239C7.46054 17.4151 7.052 17.6538 6.58279 17.8399C6.11358 18.034 5.60796 18.1311 5.06594 18.1311ZM6.19448 15.2309C6.63942 15.2309 7.03582 15.1298 7.38369 14.9275C7.73964 14.7253 8.01874 14.4462 8.22099 14.0902C8.42324 13.7262 8.52436 13.3176 8.52436 12.8646C8.52436 12.4115 8.42324 12.0071 8.22099 11.6511C8.01874 11.2871 7.73964 11.0039 7.38369 10.8017C7.03582 10.5913 6.63942 10.4862 6.19448 10.4862C5.76571 10.4862 5.3774 10.5913 5.02953 10.8017C4.68976 11.0039 4.41874 11.2871 4.2165 11.6511C4.02234 12.0071 3.92526 12.4115 3.92526 12.8646C3.92526 13.3176 4.02234 13.7262 4.2165 14.0902C4.41874 14.4462 4.68976 14.7253 5.02953 14.9275C5.3774 15.1298 5.76571 15.2309 6.19448 15.2309ZM12.8952 17.8399V7.87717H16.5842V17.8399H12.8952ZM14.7882 5.82638C14.2058 5.82638 13.7123 5.62413 13.3078 5.21964C12.9033 4.80705 12.701 4.31762 12.701 3.75132C12.701 3.18503 12.9033 2.69559 13.3078 2.28301C13.7204 1.86233 14.2138 1.652 14.7882 1.652C15.1685 1.652 15.5163 1.74908 15.8318 1.94323C16.1473 2.1293 16.4022 2.38009 16.5963 2.69559C16.7905 3.0111 16.8876 3.36301 16.8876 3.75132C16.8876 4.31762 16.6813 4.80705 16.2687 5.21964C15.8561 5.62413 15.3626 5.82638 14.7882 5.82638ZM22.0138 7.58593C22.6691 7.58593 23.2677 7.64256 23.8097 7.75582C24.3518 7.86099 24.8048 7.98233 25.1688 8.11986C25.541 8.25739 25.7796 8.37065 25.8848 8.45964L24.6834 10.6318C24.5297 10.5185 24.2425 10.3729 23.8219 10.1949C23.4093 10.0169 22.9482 9.92795 22.4385 9.92795C22.0502 9.92795 21.7225 9.98863 21.4556 10.11C21.1886 10.2232 21.0551 10.4053 21.0551 10.656C21.0551 10.9068 21.2007 11.1091 21.492 11.2628C21.7913 11.4084 22.2201 11.5378 22.7783 11.6511C23.2637 11.7482 23.7571 11.9019 24.2587 12.1122C24.7603 12.3226 25.1769 12.634 25.5086 13.0466C25.8484 13.4511 26.0183 13.9931 26.0183 14.6727C26.0183 15.3684 25.8686 15.9428 25.5693 16.3958C25.27 16.8489 24.8736 17.2008 24.3801 17.4515C23.8866 17.7023 23.3527 17.8763 22.7783 17.9733C22.2039 18.0785 21.6457 18.1311 21.1037 18.1311C20.3432 18.1311 19.6798 18.0623 19.1136 17.9248C18.5554 17.7873 18.1023 17.6295 17.7545 17.4515C17.4066 17.2736 17.1639 17.132 17.0264 17.0268L18.2156 14.5999C18.4259 14.7778 18.7697 14.9801 19.247 15.2066C19.7243 15.425 20.23 15.5342 20.7639 15.5342C21.2816 15.5342 21.6821 15.4574 21.9652 15.3037C22.2484 15.15 22.39 14.9477 22.39 14.6969C22.39 14.4947 22.3212 14.3329 22.1837 14.2115C22.0461 14.0902 21.852 13.985 21.6012 13.896C21.3504 13.8071 21.047 13.7262 20.6911 13.6533C20.3675 13.5886 20.0237 13.4875 19.6596 13.35C19.2956 13.2124 18.9518 13.0264 18.6282 12.7918C18.3046 12.5491 18.0416 12.2457 17.8394 11.8817C17.6371 11.5176 17.536 11.0767 17.536 10.559C17.536 9.89559 17.7504 9.34548 18.1792 8.90863C18.6079 8.47177 19.1621 8.14413 19.8416 7.9257C20.5212 7.69919 21.2452 7.58593 22.0138 7.58593ZM31.799 15.2309C32.2601 15.2309 32.6403 15.154 32.9396 15.0003C33.239 14.8385 33.4412 14.7091 33.5464 14.612L35.2331 17.1118C35.1037 17.2169 34.8812 17.3545 34.5657 17.5244C34.2502 17.6862 33.8538 17.8277 33.3765 17.9491C32.9073 18.0704 32.3693 18.1311 31.7626 18.1311C30.6219 18.1311 29.6187 17.9167 28.7531 17.488C27.8875 17.0511 27.212 16.4363 26.7266 15.6435C26.2493 14.8506 26.0107 13.9203 26.0107 12.8524C26.0107 11.7765 26.2493 10.8462 26.7266 10.0614C27.212 9.27672 27.8875 8.66997 28.7531 8.24121C29.6187 7.80436 30.6219 7.58593 31.7626 7.58593C32.3612 7.58593 32.8951 7.65065 33.3644 7.78009C33.8417 7.90144 34.2421 8.04301 34.5657 8.20481C34.8893 8.35851 35.1158 8.492 35.2453 8.60526L33.5221 11.1293C33.4655 11.0727 33.3603 10.9918 33.2066 10.8866C33.061 10.7814 32.8709 10.6884 32.6363 10.6075C32.4017 10.5266 32.1226 10.4862 31.799 10.4862C31.4026 10.4862 31.0304 10.5873 30.6826 10.7895C30.3428 10.9918 30.0677 11.2709 29.8574 11.6268C29.6471 11.9828 29.5419 12.3913 29.5419 12.8524C29.5419 13.3136 29.6471 13.7262 29.8574 14.0902C30.0677 14.4462 30.3428 14.7253 30.6826 14.9275C31.0304 15.1298 31.4026 15.2309 31.799 15.2309ZM40.2273 18.1311C39.1352 18.1311 38.1644 17.9086 37.315 17.4637C36.4736 17.0106 35.8103 16.3918 35.3249 15.6071C34.8476 14.8142 34.6089 13.9082 34.6089 12.8889C34.6089 11.8695 34.8476 10.9635 35.3249 10.1706C35.8103 9.36975 36.4736 8.73874 37.315 8.27761C38.1644 7.81649 39.1352 7.58593 40.2273 7.58593C41.3195 7.58593 42.2822 7.81649 43.1154 8.27761C43.9487 8.73874 44.5999 9.36975 45.0691 10.1706C45.5384 10.9635 45.773 11.8695 45.773 12.8889C45.773 13.9082 45.5384 14.8142 45.0691 15.6071C44.5999 16.3918 43.9487 17.0106 43.1154 17.4637C42.2822 17.9086 41.3195 18.1311 40.2273 18.1311ZM40.2273 15.0974C40.648 15.0974 41.0121 15.0044 41.3195 14.8183C41.6269 14.6322 41.8656 14.3693 42.0354 14.0295C42.2053 13.6897 42.2903 13.3055 42.2903 12.8767C42.2903 12.4399 42.2053 12.0515 42.0354 11.7118C41.8656 11.372 41.6269 11.105 41.3195 10.9109C41.0121 10.7167 40.648 10.6196 40.2273 10.6196C39.8067 10.6196 39.4386 10.7167 39.1231 10.9109C38.8157 11.105 38.573 11.372 38.395 11.7118C38.2251 12.0515 38.1402 12.4399 38.1402 12.8767C38.1402 13.3055 38.2251 13.6897 38.395 14.0295C38.573 14.3693 38.8157 14.6322 39.1231 14.8183C39.4386 15.0044 39.8067 15.0974 40.2273 15.0974ZM45.2173 7.87717H49.1611L51.5638 14.4906L53.9786 7.87717H57.8982L53.7238 17.8399H49.4038L45.2173 7.87717ZM60.7468 13.6412C60.7711 13.9972 60.8843 14.3127 61.0866 14.5877C61.2888 14.8628 61.5679 15.0812 61.9239 15.243C62.2879 15.3967 62.7167 15.4736 63.2102 15.4736C63.6794 15.4736 64.1001 15.425 64.4722 15.328C64.8524 15.2309 65.1801 15.1095 65.4551 14.9639C65.7383 14.8183 65.9567 14.6686 66.1104 14.5149L67.5424 16.7963C67.3402 17.0147 67.053 17.2291 66.6807 17.4394C66.3167 17.6417 65.8353 17.8075 65.2367 17.9369C64.638 18.0664 63.8816 18.1311 62.9675 18.1311C61.8673 18.1311 60.8884 17.9248 60.0308 17.5122C59.1733 17.0996 58.4978 16.4929 58.0043 15.692C57.5109 14.8911 57.2641 13.9122 57.2641 12.7554C57.2641 11.7846 57.4744 10.9109 57.8951 10.1342C58.3239 9.34952 58.9428 8.73065 59.7517 8.27761C60.5607 7.81649 61.5356 7.58593 62.6762 7.58593C63.7603 7.58593 64.6987 7.78413 65.4915 8.18054C66.2924 8.57694 66.9074 9.1675 67.3362 9.95222C67.773 10.7289 67.9914 11.6996 67.9914 12.8646C67.9914 12.9293 67.9874 13.0587 67.9793 13.2529C67.9793 13.4471 67.9712 13.5765 67.955 13.6412H60.7468ZM64.5207 11.7118C64.5126 11.4529 64.4439 11.1981 64.3144 10.9473C64.185 10.6884 63.9908 10.4781 63.732 10.3163C63.4731 10.1464 63.1414 10.0614 62.7369 10.0614C62.3324 10.0614 61.9886 10.1423 61.7055 10.3041C61.4304 10.4578 61.2201 10.6601 61.0744 10.9109C60.9288 11.1617 60.8479 11.4286 60.8318 11.7118H64.5207ZM71.6932 17.8399H68.0042V7.87717H71.6932V9.41829H71.6326C71.6973 9.23222 71.855 8.99762 72.1058 8.71447C72.3566 8.42323 72.7085 8.16436 73.1616 7.93784C73.6146 7.70323 74.1687 7.58593 74.824 7.58593C75.2851 7.58593 75.7099 7.65874 76.0982 7.80436C76.4865 7.94188 76.7696 8.07537 76.9476 8.20481L75.5157 11.2021C75.4024 11.0646 75.2002 10.923 74.909 10.7774C74.6258 10.6237 74.2699 10.5468 73.8411 10.5468C73.3476 10.5468 72.9391 10.6722 72.6155 10.923C72.3 11.1738 72.0654 11.4772 71.9117 11.8331C71.766 12.1891 71.6932 12.5248 71.6932 12.8403V17.8399Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_364_14702">
          <rect
            width="120"
            height="17.5281"
            fill="white"
            transform="translate(0 0.648926)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const Footnotes = () => {
  const year = new Date().getFullYear();

  return (
    <div className="d-flex w-100 justify-content-between">
      <p>© {year} - Copyright</p>
      <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
        Privacy
      </a>
    </div>
  );
};

const SocialLink = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #1b1819;
`;

const LinkHeader = styled.p`
  color: #1b1819;
  margin-bottom: 1rem;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 14px */
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

const LinkItem = styled.a`
  color: #1b1819;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

const MainContainer = styled.div`
  display: flex;
  gap: 80px;

  @media screen and (max-width: 900px) {
    gap: 40px;
    flex-direction: column;
  }
`;

const RoundedDiv = styled.div`
  padding: 32px 40px;
  gap: 96px;

  border-radius: 16px;
  background: #fff;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    padding: 32px 20px;
    gap: 48px;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export default function Footer(props) {
  return (
    <footer
      style={{
        minHeight: "42.5rem",
        width: "100%",
        background: "linear-gradient(90deg, #03B172 0%, #05EB97 100%)",
        padding: "40px 40px 24px 40px",
        gap: 48,
      }}
      className="d-flex flex-column justify-content-center align-content-center"
    >
      <RoundedDiv>
        <MainContainer>
          <div>
            <Logo />
          </div>
          <LinksContainer>
            <div className="d-flex flex-column" style={{ gap: 32 }}>
              <div className="d-flex flex-column" style={{ gap: 4 }}>
                <LinkHeader>PROJECTS</LinkHeader>
                <LinkItem href="/projects/built-with-bos">
                  Built With BOS
                </LinkItem>
                <LinkItem href="/projects/native-projects">BOS Native</LinkItem>
                <LinkItem href="/projects/bos-integration">
                  Integrated with BOS
                </LinkItem>
              </div>
              <div className="d-flex flex-column" style={{ gap: 4 }}>
                <LinkHeader>OPPORTUNITIES</LinkHeader>
                <LinkItem href="/opportunities/funding">
                  Funding Opportunities
                </LinkItem>
                <LinkItem href="/opportunities/accelerator">
                  Accelerator Programs
                </LinkItem>
                <LinkItem href="/opportunities/incubation">
                  Incubation Programs
                </LinkItem>
                <LinkItem href="/opportunities/amplification">
                  Amplification Channels
                </LinkItem>
              </div>
            </div>
            <div className="d-flex flex-column" style={{ gap: 32 }}>
              <div className="d-flex flex-column" style={{ gap: 4 }}>
                <LinkHeader>RESOURCES</LinkHeader>
                <LinkItem href="/education/tutorials">Tutorials</LinkItem>
                <LinkItem href="/education/code-reviews">Code Reviews</LinkItem>
                <LinkItem href="/education/workshops">
                  Workshops/Webinars
                </LinkItem>
                <LinkItem href="/education/office-hours">Office Hours</LinkItem>
              </div>
            </div>
            <div className="d-flex flex-column" style={{ gap: 32 }}>
              <div className="d-flex flex-column" style={{ gap: 4 }}>
                <LinkHeader>COMMUNITY</LinkHeader>
                <LinkItem href="/communities/developer">Developers</LinkItem>
                <LinkItem href="/communities/project">Projects</LinkItem>
                <LinkItem href="/communities/regional">Regional</LinkItem>
                <LinkItem href="/communities/general-bos">General BOS</LinkItem>
              </div>
              <div className="d-flex flex-column" style={{ gap: 4 }}>
                <LinkHeader>EVENTS</LinkHeader>
                <LinkItem href="/events/calendar">Calendar</LinkItem>
                <LinkItem href="/events/library">Past Events</LinkItem>
              </div>
            </div>
            <div className="d-flex flex-column" style={{ gap: 32 }}>
              <div className="d-flex flex-column" style={{ gap: 4 }}>
                <LinkHeader>ABOUT</LinkHeader>
                <LinkItem href="/about">About DiscoverBOS</LinkItem>
                <LinkItem href="/integrations">Integrations</LinkItem>
                <LinkItem href="/infrastructure">Infrastructure</LinkItem>
                <LinkItem href="/gateways">Gateways</LinkItem>
              </div>
            </div>
          </LinksContainer>
          <div className="d-flex flex-column gap-3">
            <button
              className="d-flex justify-content-center align-content-center"
              style={{
                color: "#FCFCFB",
                padding: "0.5rem 1.25rem",
                gap: 10,
                borderRadius: "50rem",
                border: "1px solid #E3E3E0",
                background: "#1B1B18",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
              onClick={props.requestSignIn}
            >
              Create Account
            </button>
            <button
              className="d-flex justify-content-center align-content-center"
              style={{
                padding: "0.5rem 1.25rem",
                gap: 10,
                borderRadius: "50rem",
                border: "1px solid #E3E3E0",
                background: "#F3F3F2",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
              onClick={props.requestSignIn}
            >
              Sign In
            </button>
          </div>
        </MainContainer>
        <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between gap-3">
          <div className="d-flex flex-column">
            <div className="d-flex gap-3">
              <SocialLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M19.3273 5.50002C19.2801 5.38581 19.2 5.28818 19.0972 5.21949C18.9944 5.15079 18.8736 5.11411 18.75 5.11408H16.3727C16.0403 4.5486 15.5672 4.07874 14.9995 3.75018C14.4318 3.42163 13.7887 3.24555 13.1328 3.23908C12.6442 3.23268 12.1591 3.32406 11.7063 3.50787C11.2535 3.69168 10.842 3.9642 10.4961 4.3094C10.1401 4.65879 9.85746 5.07584 9.66494 5.53603C9.47241 5.99621 9.37383 6.49025 9.375 6.98908V7.46487C6.22969 6.63518 3.65703 4.07658 3.62969 4.04924C3.54584 3.96465 3.43956 3.90578 3.32337 3.87956C3.20719 3.85334 3.08593 3.86087 2.97387 3.90126C2.86182 3.94165 2.76364 4.01321 2.6909 4.10753C2.61816 4.20184 2.57388 4.31498 2.56328 4.43362C2.22656 8.16721 3.31094 10.6656 4.28203 12.1039C4.75553 12.8149 5.33155 13.452 5.99141 13.9946C4.80156 15.3641 2.92812 16.0836 2.90781 16.0914C2.81962 16.1245 2.74003 16.177 2.675 16.2451C2.60996 16.3132 2.56116 16.3951 2.53223 16.4848C2.50331 16.5744 2.49502 16.6694 2.50797 16.7627C2.52092 16.856 2.55478 16.9451 2.60703 17.0235C2.66562 17.111 2.9 17.418 3.47266 17.7047C4.18047 18.0594 5.11562 18.2391 6.25 18.2391C11.7711 18.2391 16.3844 13.9875 16.8555 8.51721L19.1922 6.18127C19.2796 6.09382 19.339 5.98241 19.3631 5.86115C19.3872 5.73989 19.3747 5.61421 19.3273 5.50002ZM15.8117 7.79768C15.7046 7.9051 15.6401 8.04782 15.6305 8.19924C15.3125 13.1281 11.1937 16.9891 6.25 16.9891C5.425 16.9891 4.84375 16.8797 4.43594 16.7485C5.33516 16.2602 6.58906 15.4203 7.39531 14.211C7.44263 14.1398 7.47487 14.0598 7.49005 13.9757C7.50522 13.8917 7.503 13.8054 7.48352 13.7222C7.46405 13.6391 7.42773 13.5608 7.37682 13.4922C7.32591 13.4236 7.26147 13.3662 7.1875 13.3235C7.15078 13.3024 3.75703 11.2656 3.75 5.82346C5 6.83909 7.28516 8.41487 9.89609 8.85393C9.98558 8.86902 10.0773 8.86444 10.1648 8.84051C10.2523 8.81658 10.3336 8.77387 10.403 8.71536C10.4723 8.65685 10.5281 8.58394 10.5665 8.50169C10.6048 8.41944 10.6248 8.32983 10.625 8.23908V6.98908C10.6243 6.65569 10.6903 6.32551 10.8191 6.018C10.9479 5.71048 11.1369 5.43184 11.375 5.19846C11.6032 4.96979 11.875 4.78919 12.1743 4.66735C12.4735 4.54551 12.7941 4.48489 13.1172 4.48908C14.1062 4.50158 15.0305 5.10471 15.4172 5.98987C15.4659 6.10115 15.5461 6.19582 15.6478 6.26228C15.7495 6.32874 15.8683 6.36412 15.9898 6.36408H17.2398L15.8117 7.79768Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>
              <SocialLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M18.5063 2.16021C18.4094 2.07659 18.2916 2.02098 18.1655 1.99936C18.0394 1.97775 17.9098 1.99095 17.7906 2.03755L1.95783 8.23365C1.73344 8.3209 1.54347 8.47868 1.41652 8.68325C1.28957 8.88781 1.2325 9.12808 1.25392 9.36788C1.27533 9.60768 1.37407 9.83403 1.53526 10.0129C1.69645 10.1917 1.91137 10.3133 2.14767 10.3594L6.25001 11.1649V15.7391C6.24921 15.9883 6.32325 16.2319 6.46255 16.4385C6.60184 16.6451 6.79998 16.8051 7.03126 16.8977C7.2622 16.992 7.51616 17.0146 7.76013 16.9627C8.00409 16.9107 8.22678 16.7865 8.39923 16.6063L10.3774 14.5547L13.5156 17.3016C13.7421 17.5024 14.0341 17.6136 14.3367 17.6141C14.4694 17.614 14.6012 17.5932 14.7274 17.5524C14.9336 17.487 15.119 17.3687 15.2653 17.2092C15.4115 17.0498 15.5135 16.8549 15.561 16.6438L18.732 2.84849C18.7604 2.72407 18.7544 2.59429 18.7146 2.47304C18.6748 2.35179 18.6028 2.24365 18.5063 2.16021ZM13.7297 4.97271L6.73048 9.98521L2.85548 9.22505L13.7297 4.97271ZM7.50001 15.7391V12.0297L9.43673 13.7282L7.50001 15.7391ZM14.3383 16.3641L7.87892 10.7001L17.1758 4.03677L14.3383 16.3641Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>
              <SocialLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M10 6.36426C9.25832 6.36426 8.5333 6.58419 7.91661 6.99625C7.29993 7.4083 6.81928 7.99397 6.53545 8.67919C6.25162 9.36442 6.17736 10.1184 6.32206 10.8458C6.46675 11.5733 6.8239 12.2415 7.34835 12.7659C7.8728 13.2904 8.54098 13.6475 9.26841 13.7922C9.99584 13.9369 10.7498 13.8626 11.4351 13.5788C12.1203 13.295 12.706 12.8143 13.118 12.1976C13.5301 11.581 13.75 10.8559 13.75 10.1143C13.749 9.12001 13.3535 8.16679 12.6505 7.46375C11.9475 6.76071 10.9942 6.36529 10 6.36426ZM10 12.6143C9.50555 12.6143 9.0222 12.4676 8.61107 12.1929C8.19995 11.9182 7.87952 11.5278 7.6903 11.071C7.50108 10.6142 7.45157 10.1115 7.54804 9.62653C7.6445 9.14158 7.8826 8.69612 8.23223 8.34649C8.58186 7.99686 9.02732 7.75876 9.51227 7.66229C9.99723 7.56583 10.4999 7.61534 10.9567 7.80456C11.4135 7.99378 11.804 8.31421 12.0787 8.72533C12.3534 9.13646 12.5 9.6198 12.5 10.1143C12.5 10.7773 12.2366 11.4132 11.7678 11.882C11.2989 12.3509 10.663 12.6143 10 12.6143ZM13.75 1.98926H6.25C5.09006 1.9905 3.97798 2.45183 3.15778 3.27204C2.33758 4.09224 1.87624 5.20432 1.875 6.36426V13.8643C1.87624 15.0242 2.33758 16.1363 3.15778 16.9565C3.97798 17.7767 5.09006 18.238 6.25 18.2393H13.75C14.9099 18.238 16.022 17.7767 16.8422 16.9565C17.6624 16.1363 18.1238 15.0242 18.125 13.8643V6.36426C18.1238 5.20432 17.6624 4.09224 16.8422 3.27204C16.022 2.45183 14.9099 1.9905 13.75 1.98926ZM16.875 13.8643C16.875 14.6931 16.5458 15.4879 15.9597 16.074C15.3737 16.66 14.5788 16.9893 13.75 16.9893H6.25C5.4212 16.9893 4.62634 16.66 4.04029 16.074C3.45424 15.4879 3.125 14.6931 3.125 13.8643V6.36426C3.125 5.53546 3.45424 4.7406 4.04029 4.15455C4.62634 3.5685 5.4212 3.23926 6.25 3.23926H13.75C14.5788 3.23926 15.3737 3.5685 15.9597 4.15455C16.5458 4.7406 16.875 5.53546 16.875 6.36426V13.8643ZM15 6.05176C15 6.23718 14.945 6.41843 14.842 6.5726C14.739 6.72678 14.5926 6.84694 14.4213 6.91789C14.25 6.98885 14.0615 7.00742 13.8796 6.97124C13.6977 6.93507 13.5307 6.84578 13.3996 6.71467C13.2685 6.58356 13.1792 6.41651 13.143 6.23466C13.1068 6.0528 13.1254 5.8643 13.1964 5.69299C13.2673 5.52169 13.3875 5.37527 13.5417 5.27225C13.6958 5.16924 13.8771 5.11426 14.0625 5.11426C14.3111 5.11426 14.5496 5.21303 14.7254 5.38884C14.9012 5.56466 15 5.80312 15 6.05176Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>
              <SocialLink href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M17.5 3.86426H2.5C2.33424 3.86426 2.17527 3.93011 2.05806 4.04732C1.94085 4.16453 1.875 4.3235 1.875 4.48926V15.1143C1.875 15.4458 2.0067 15.7637 2.24112 15.9981C2.47554 16.2326 2.79348 16.3643 3.125 16.3643H16.875C17.2065 16.3643 17.5245 16.2326 17.7589 15.9981C17.9933 15.7637 18.125 15.4458 18.125 15.1143V4.48926C18.125 4.3235 18.0592 4.16453 17.9419 4.04732C17.8247 3.93011 17.6658 3.86426 17.5 3.86426ZM10 10.5166L4.10703 5.11426H15.893L10 10.5166ZM7.71172 10.1143L3.125 14.3182V5.91035L7.71172 10.1143ZM8.63672 10.9619L9.57422 11.8252C9.68953 11.931 9.84035 11.9898 9.99687 11.9898C10.1534 11.9898 10.3042 11.931 10.4195 11.8252L11.357 10.9619L15.8883 15.1143H4.10703L8.63672 10.9619ZM12.2883 10.1143L16.875 5.90957V14.3189L12.2883 10.1143Z"
                    fill="white"
                  />
                </svg>
              </SocialLink>
            </div>
            <div className="d-flex align-items-end">
              <svg
                style={{ padding: "4.715px 7.611px 4.748px 7.606px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="59"
                viewBox="0 0 61 59"
                fill="none"
              >
                <path
                  d="M16.0578 5.08163C15.5438 7.74655 15.0612 10.3058 14.5693 12.8613C14.4735 13.3713 14.4053 13.731 14.1799 14.3506C14.0173 14.8124 13.6514 15.7844 13.1931 15.505C12.8386 15.2347 12.6214 14.9977 12.7019 14.0947C12.9215 11.7638 13.4861 9.48448 14.034 7.21999C14.5191 5.22072 14.9196 3.7036 15.4533 1.96012C15.7026 1.14588 16.2178 0.985796 16.9043 1.36689C17.5203 1.70914 18.1585 2.04951 18.6986 2.50124C20.6547 4.11929 22.5609 5.78191 24.493 7.43337C24.7343 7.63702 24.9347 7.7814 25.1872 8.06476C25.4899 8.4111 25.7293 8.64628 25.4591 9.00073C25.2055 9.34034 24.6564 9.09998 24.404 8.92416C22.2627 7.501 17.8945 4.49164 17.6255 4.38443C17.9203 5.90997 18.1612 7.32804 18.4819 8.73488C20.7614 18.5216 23.7192 28.0627 28.9064 36.7834C33.0124 43.6867 37.8648 49.9845 43.6841 55.5285C44.0256 55.8581 44.3431 56.2211 44.6421 56.5767C45.0542 57.0527 45.1844 57.3733 44.953 57.6035C44.4602 57.9768 44.0984 57.7251 43.7922 57.5493C43.1763 57.207 42.625 56.7294 42.0886 56.2684C34.9781 50.027 29.5883 42.4616 25.171 34.1552C20.6366 25.6302 18.1928 16.4444 16.5219 7.01856C16.4527 6.51804 16.1656 5.29657 16.0578 5.08163Z"
                  fill="black"
                />
              </svg>
              <p
                className="m-0"
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "130%",
                }}
              >
                Follow us on Twitter, we are super active there!
              </p>
            </div>
          </div>
          <div className="d-flex align-items-end">
            <p
              className="m-0"
              style={{
                color: "#1B1819",
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              1901 Fake Address Street, Woohoo ,<br /> New York 11707
            </p>
          </div>
        </div>
      </RoundedDiv>
      <Footnotes />
    </footer>
  );
}
