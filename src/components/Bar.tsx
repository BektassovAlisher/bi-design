import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Avatar,
  SvgIcon,
} from "@mui/material";
import "./FirstTable.css";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";

import "./Bar.css";

import { deepOrange } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Bar = () => {
  return (
    <div className="toolbar">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Button
            sx={{
              width: "165px",
              height: "43px",
              marginRight: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
            startIcon={
              <SvgIcon
                sx={{
                  height: "100px",
                  width: "165px",
                  paddingBottom: "20px",
                  paddingRight: "7px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 220 50"
                  width={200}
                  height={200}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M65.5433 54.597C72.4195 52.1747 77.7921 46.6418 77.7921 37.9994C77.7921 29.3575 72.4195 23.8243 65.5429 21.4023C62.8505 20.4538 59.9262 19.9797 56.9997 19.9797C54.0734 19.9797 51.1489 20.4538 48.4565 21.4023C41.5802 23.8243 36.2076 29.3575 36.2076 37.9994C36.2076 46.6418 41.5802 52.1747 48.4567 54.597C51.1491 55.5454 54.0735 56.0198 57 56.0198C59.9263 56.0198 62.8508 55.5454 65.5433 54.597ZM80 38.0001C80 64.6667 34 64.6667 34 38.0001C34 11.3333 80 11.3333 80 38.0001ZM78.7972 37.9994C78.7972 47.1341 73.1304 52.9783 65.8768 55.5334C63.0747 56.5205 60.0359 57.0142 57 57.0142C53.964 57.0142 50.9252 56.5205 48.123 55.5334C40.8694 52.9783 35.2026 47.1341 35.2026 37.9994C35.2026 28.8655 40.8694 23.021 48.1229 20.4661C50.925 19.4787 53.9639 18.9853 56.9997 18.9853C60.0357 18.9853 63.0745 19.4787 65.8767 20.4661C73.1304 23.021 78.7972 28.8655 78.7972 37.9994Z"
                    fill="#0060FE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M45.1527 48.7294H54.0142C58.9132 48.7294 62.1375 46.7679 62.1375 42.8437C62.1375 39.8999 60.5867 38.4596 58.076 37.509C59.6258 36.6506 60.9288 35.3022 60.9288 32.8798C60.9288 28.8553 57.3852 27.2694 53.7664 27.2694H45.1527C44.7131 27.2694 44.3569 27.622 44.3569 28.0571V47.9418C44.3569 48.3768 44.7131 48.7294 45.1527 48.7294ZM49.0084 35.9458V31.8806C49.0085 31.6197 49.222 31.4083 49.4858 31.4083H53.0531C55.068 31.4083 56.1846 32.2051 56.1846 33.6159C56.1846 35.2711 54.8509 35.9458 52.7433 35.9458H49.0084ZM49.0084 44.1182V39.8697H53.8592C56.308 39.8697 57.3933 40.759 57.3933 42.1993C57.3933 43.8552 56.122 44.5907 54.0142 44.5907H49.4858C49.222 44.5907 49.0084 44.3791 49.0084 44.1182ZM65.3469 48.7294H68.8486C69.2882 48.7294 69.6445 48.377 69.6445 47.942V28.0571C69.6442 27.622 69.2882 27.2694 68.8486 27.2694H65.3469C65.0833 27.2694 64.8698 27.4808 64.8696 27.7419V48.257C64.8696 48.5182 65.0833 48.7294 65.3469 48.7294Z"
                    fill="white"
                  />
                  <path
                    d="M93.8887 48H89.5547L89.582 44.8008H93.8887C94.9642 44.8008 95.8711 44.5592 96.6094 44.0762C97.3477 43.584 97.9036 42.8685 98.2773 41.9297C98.6602 40.9909 98.8516 39.8561 98.8516 38.5254V37.5547C98.8516 36.5339 98.7422 35.6361 98.5234 34.8613C98.3138 34.0866 97.9993 33.4349 97.5801 32.9062C97.1608 32.3776 96.6458 31.9811 96.0352 31.7168C95.4245 31.4434 94.7227 31.3066 93.9297 31.3066H89.4727V28.0938H93.9297C95.2604 28.0938 96.4772 28.3216 97.5801 28.7773C98.6921 29.224 99.6536 29.8665 100.465 30.7051C101.276 31.5436 101.9 32.5462 102.338 33.7129C102.785 34.8704 103.008 36.1602 103.008 37.582V38.5254C103.008 39.9382 102.785 41.2279 102.338 42.3945C101.9 43.5612 101.276 44.5638 100.465 45.4023C99.6628 46.2318 98.7012 46.8743 97.5801 47.3301C96.4681 47.7767 95.2376 48 93.8887 48ZM91.8789 28.0938V48H87.7773V28.0938H91.8789ZM119.346 44.8008V48H108.75V44.8008H119.346ZM110.09 28.0938V48H105.988V28.0938H110.09ZM117.965 36.2012V39.3184H108.75V36.2012H117.965ZM119.332 28.0938V31.3066H108.75V28.0938H119.332ZM132.102 42.791C132.102 42.4355 132.047 42.1165 131.938 41.834C131.837 41.5423 131.646 41.278 131.363 41.041C131.081 40.7949 130.684 40.5534 130.174 40.3164C129.663 40.0794 129.003 39.8333 128.191 39.5781C127.289 39.2865 126.432 38.9583 125.621 38.5938C124.819 38.2292 124.108 37.8053 123.488 37.3223C122.878 36.8301 122.395 36.2604 122.039 35.6133C121.693 34.9661 121.52 34.2142 121.52 33.3574C121.52 32.528 121.702 31.776 122.066 31.1016C122.431 30.418 122.941 29.8346 123.598 29.3516C124.254 28.8594 125.029 28.4811 125.922 28.2168C126.824 27.9525 127.813 27.8203 128.889 27.8203C130.356 27.8203 131.637 28.0846 132.73 28.6133C133.824 29.1419 134.672 29.8665 135.273 30.7871C135.884 31.7077 136.189 32.7604 136.189 33.9453H132.115C132.115 33.362 131.992 32.8516 131.746 32.4141C131.509 31.9674 131.145 31.6165 130.652 31.3613C130.169 31.1061 129.559 30.9785 128.82 30.9785C128.109 30.9785 127.517 31.0879 127.043 31.3066C126.569 31.5163 126.214 31.8034 125.977 32.168C125.74 32.5234 125.621 32.9245 125.621 33.3711C125.621 33.7083 125.703 34.0137 125.867 34.2871C126.04 34.5605 126.296 34.8158 126.633 35.0527C126.97 35.2897 127.385 35.513 127.877 35.7227C128.369 35.9323 128.939 36.1374 129.586 36.3379C130.671 36.666 131.623 37.0352 132.443 37.4453C133.273 37.8555 133.965 38.3158 134.521 38.8262C135.077 39.3366 135.497 39.9154 135.779 40.5625C136.062 41.2096 136.203 41.9434 136.203 42.7637C136.203 43.6296 136.035 44.4043 135.697 45.0879C135.36 45.7715 134.872 46.3503 134.234 46.8242C133.596 47.2982 132.835 47.6582 131.951 47.9043C131.067 48.1504 130.078 48.2734 128.984 48.2734C128 48.2734 127.029 48.1458 126.072 47.8906C125.115 47.6263 124.245 47.2298 123.461 46.7012C122.686 46.1725 122.066 45.498 121.602 44.6777C121.137 43.8574 120.904 42.8867 120.904 41.7656H125.02C125.02 42.3854 125.115 42.9095 125.307 43.3379C125.498 43.7663 125.767 44.1126 126.113 44.377C126.469 44.6413 126.888 44.8327 127.371 44.9512C127.863 45.0697 128.401 45.1289 128.984 45.1289C129.695 45.1289 130.279 45.0286 130.734 44.8281C131.199 44.6276 131.541 44.3496 131.76 43.9941C131.988 43.6387 132.102 43.2376 132.102 42.791ZM143.354 28.0938V48H139.266V28.0938H143.354ZM162.973 37.5957V45.4844C162.663 45.8581 162.184 46.2637 161.537 46.7012C160.89 47.1296 160.056 47.4987 159.035 47.8086C158.014 48.1185 156.779 48.2734 155.33 48.2734C154.045 48.2734 152.874 48.0638 151.816 47.6445C150.759 47.2161 149.848 46.5918 149.082 45.7715C148.326 44.9512 147.742 43.9486 147.332 42.7637C146.922 41.5697 146.717 40.207 146.717 38.6758V37.4316C146.717 35.9004 146.913 34.5378 147.305 33.3438C147.706 32.1497 148.275 31.1426 149.014 30.3223C149.752 29.502 150.632 28.8776 151.652 28.4492C152.673 28.0208 153.808 27.8066 155.057 27.8066C156.788 27.8066 158.21 28.0892 159.322 28.6543C160.434 29.2103 161.282 29.985 161.865 30.9785C162.458 31.9629 162.822 33.0931 162.959 34.3691H158.98C158.88 33.6947 158.689 33.1068 158.406 32.6055C158.124 32.1042 157.718 31.7122 157.189 31.4297C156.67 31.1471 155.995 31.0059 155.166 31.0059C154.482 31.0059 153.872 31.1471 153.334 31.4297C152.805 31.7031 152.359 32.1087 151.994 32.6465C151.63 33.1842 151.352 33.8496 151.16 34.6426C150.969 35.4355 150.873 36.3561 150.873 37.4043V38.6758C150.873 39.7148 150.973 40.6354 151.174 41.4375C151.374 42.2305 151.671 42.9004 152.062 43.4473C152.464 43.985 152.956 44.3906 153.539 44.6641C154.122 44.9375 154.801 45.0742 155.576 45.0742C156.223 45.0742 156.761 45.0195 157.189 44.9102C157.627 44.8008 157.978 44.6686 158.242 44.5137C158.516 44.3496 158.725 44.1947 158.871 44.0488V40.5215H155.125V37.5957H162.973ZM182.482 28.0938V48H178.381L170.383 34.6562V48H166.281V28.0938H170.383L178.395 41.4512V28.0938H182.482Z"
                    fill="#0060FE"
                  />
                  <path
                    d="M192.293 34.2929C192.683 33.9024 193.317 33.9024 193.707 34.2929L199 39.5858L204.293 34.2929C204.683 33.9024 205.317 33.9024 205.707 34.2929C206.098 34.6834 206.098 35.3166 205.707 35.7071L199.707 41.7071C199.317 42.0976 198.683 42.0976 198.293 41.7071L192.293 35.7071C191.902 35.3166 191.902 34.6834 192.293 34.2929Z"
                    fill="#0060FE"
                  />
                </svg>
              </SvgIcon>
            }
          ></Button>

          <Typography
            className="text"
            variant="body1"
            sx={{
              fontSize: "18px",
              color: "black",
              paddingLeft: "5px",
              fontWeight: "200",
            }}
          >
            Инициация
          </Typography>
          <Typography
            className="text"
            variant="body1"
            sx={{ fontSize: "18px", color: "black", fontWeight: "200" }}
          >
            Проектирование
          </Typography>
          <Typography
            className="text"
            variant="body1"
            sx={{ fontSize: "18px", color: "black", fontWeight: "200" }}
          >
            СМР
          </Typography>
          <Button
            sx={{
              marginLeft: "650px",
              height: "28px",
              width: "11%",
              border: "1px solid #ddd",
              borderRadius: "9px",
              marginRight: "1px",
              backgroundColor: "rgb(245, 247, 249)",
            }}
            startIcon={
              <SvgIcon sx={{ fontSize: "10  rem" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1593.17 32.8661C1593.61 31.1539 1595.15 29.875 1597 29.875C1599.19 29.875 1600.96 31.6473 1600.96 33.8333C1600.96 33.8439 1600.96 33.8545 1600.96 33.865V35.7083H1601.17C1602.43 35.7083 1603.46 36.734 1603.46 38V43.8333C1603.46 45.0993 1602.43 46.125 1601.17 46.125H1592.83C1591.57 46.125 1590.54 45.0993 1590.54 43.8333V38C1590.54 36.734 1591.57 35.7083 1592.83 35.7083H1599.71V33.8333C1599.71 33.8238 1599.71 33.8143 1599.71 33.8048C1599.69 32.3223 1598.49 31.125 1597 31.125C1595.74 31.125 1594.68 31.9944 1594.39 33.1722C1594.3 33.5069 1593.96 33.7097 1593.63 33.6251C1593.29 33.5406 1593.09 33.2008 1593.17 32.8661ZM1592.83 36.9583C1592.26 36.9583 1591.79 37.4243 1591.79 38V43.8333C1591.79 44.409 1592.26 44.875 1592.83 44.875H1601.17C1601.74 44.875 1602.21 44.409 1602.21 43.8333V38C1602.21 37.4243 1601.74 36.9583 1601.17 36.9583H1592.83Z"
                    fill="#212121"
                  />
                  <path
                    d="M1616.46 37.5469H1614.88V36.4297H1616.24C1616.73 36.4297 1617.12 36.3594 1617.42 36.2188C1617.72 36.0729 1617.94 35.8724 1618.08 35.6172C1618.22 35.3568 1618.29 35.0547 1618.29 34.7109C1618.29 34.4036 1618.21 34.1224 1618.05 33.8672C1617.9 33.612 1617.67 33.4089 1617.35 33.2578C1617.03 33.1016 1616.62 33.0234 1616.12 33.0234C1615.75 33.0234 1615.41 33.0911 1615.1 33.2266C1614.79 33.362 1614.55 33.5521 1614.37 33.7969C1614.19 34.0417 1614.1 34.3307 1614.1 34.6641H1612.14C1612.14 34.1693 1612.24 33.7266 1612.45 33.3359C1612.67 32.9401 1612.96 32.6042 1613.32 32.3281C1613.69 32.0521 1614.11 31.8411 1614.59 31.6953C1615.08 31.5443 1615.59 31.4688 1616.12 31.4688C1616.75 31.4688 1617.32 31.5391 1617.82 31.6797C1618.33 31.8151 1618.76 32.0182 1619.12 32.2891C1619.49 32.5599 1619.77 32.8984 1619.96 33.3047C1620.15 33.7057 1620.25 34.1719 1620.25 34.7031C1620.25 35.0938 1620.16 35.4609 1619.98 35.8047C1619.8 36.1484 1619.54 36.4505 1619.21 36.7109C1618.88 36.9714 1618.48 37.1771 1618.01 37.3281C1617.54 37.474 1617.03 37.5469 1616.46 37.5469ZM1614.88 36.8672H1616.46C1617.09 36.8672 1617.65 36.9323 1618.14 37.0625C1618.63 37.1927 1619.04 37.3828 1619.38 37.6328C1619.72 37.8828 1619.98 38.1927 1620.16 38.5625C1620.33 38.9271 1620.42 39.3464 1620.42 39.8203C1620.42 40.3516 1620.32 40.8255 1620.1 41.2422C1619.89 41.6536 1619.6 42.0026 1619.21 42.2891C1618.83 42.5755 1618.37 42.7917 1617.84 42.9375C1617.32 43.0833 1616.75 43.1562 1616.12 43.1562C1615.62 43.1562 1615.12 43.0938 1614.62 42.9688C1614.14 42.8385 1613.69 42.6406 1613.29 42.375C1612.89 42.1042 1612.58 41.7604 1612.34 41.3438C1612.1 40.9271 1611.98 40.4271 1611.98 39.8438H1613.95C1613.95 40.1667 1614.04 40.4635 1614.22 40.7344C1614.41 41 1614.66 41.2135 1614.98 41.375C1615.31 41.5312 1615.69 41.6094 1616.12 41.6094C1616.62 41.6094 1617.04 41.5312 1617.38 41.375C1617.73 41.2188 1618 41.0052 1618.18 40.7344C1618.37 40.4635 1618.46 40.1589 1618.46 39.8203C1618.46 39.4974 1618.41 39.2188 1618.31 38.9844C1618.22 38.7448 1618.08 38.5521 1617.89 38.4062C1617.7 38.2552 1617.47 38.1432 1617.2 38.0703C1616.92 37.9974 1616.6 37.9609 1616.24 37.9609H1614.88V36.8672ZM1626.86 41.3047V37.2734C1626.86 36.9714 1626.8 36.7109 1626.7 36.4922C1626.59 36.2734 1626.42 36.1042 1626.2 35.9844C1625.98 35.8646 1625.7 35.8047 1625.37 35.8047C1625.06 35.8047 1624.79 35.8568 1624.57 35.9609C1624.35 36.0651 1624.17 36.2057 1624.05 36.3828C1623.92 36.5599 1623.86 36.7604 1623.86 36.9844H1621.98C1621.98 36.651 1622.07 36.3281 1622.23 36.0156C1622.39 35.7031 1622.62 35.4245 1622.93 35.1797C1623.24 34.9349 1623.6 34.7422 1624.03 34.6016C1624.46 34.4609 1624.94 34.3906 1625.47 34.3906C1626.1 34.3906 1626.67 34.4974 1627.16 34.7109C1627.65 34.9245 1628.04 35.2474 1628.32 35.6797C1628.61 36.1068 1628.75 36.6432 1628.75 37.2891V41.0469C1628.75 41.4323 1628.78 41.7786 1628.83 42.0859C1628.89 42.388 1628.97 42.651 1629.07 42.875V43H1627.14C1627.05 42.7969 1626.98 42.5391 1626.93 42.2266C1626.88 41.9089 1626.86 41.6016 1626.86 41.3047ZM1627.13 37.8594L1627.15 39.0234H1625.8C1625.45 39.0234 1625.14 39.0573 1624.88 39.125C1624.61 39.1875 1624.39 39.2812 1624.21 39.4062C1624.03 39.5312 1623.9 39.6823 1623.81 39.8594C1623.72 40.0365 1623.68 40.237 1623.68 40.4609C1623.68 40.6849 1623.73 40.8906 1623.84 41.0781C1623.94 41.2604 1624.09 41.4036 1624.29 41.5078C1624.49 41.612 1624.74 41.6641 1625.02 41.6641C1625.41 41.6641 1625.74 41.5859 1626.03 41.4297C1626.32 41.2682 1626.55 41.0729 1626.72 40.8438C1626.89 40.6094 1626.97 40.388 1626.98 40.1797L1627.59 41.0156C1627.53 41.2292 1627.42 41.4583 1627.27 41.7031C1627.12 41.9479 1626.92 42.1823 1626.68 42.4062C1626.44 42.625 1626.15 42.8047 1625.81 42.9453C1625.48 43.0859 1625.09 43.1562 1624.66 43.1562C1624.1 43.1562 1623.61 43.0469 1623.18 42.8281C1622.75 42.6042 1622.41 42.3047 1622.16 41.9297C1621.92 41.5495 1621.8 41.1198 1621.8 40.6406C1621.8 40.1927 1621.88 39.7969 1622.05 39.4531C1622.22 39.1042 1622.47 38.8125 1622.8 38.5781C1623.13 38.3438 1623.54 38.1667 1624.02 38.0469C1624.49 37.9219 1625.04 37.8594 1625.66 37.8594H1627.13ZM1636.39 34.5469V36.0469H1632.22V34.5469H1636.39ZM1632.66 34.5469V43H1630.78V34.5469H1632.66ZM1637.87 34.5469V43H1635.98V34.5469H1637.87ZM1641.75 36.1719V46.25H1639.87V34.5469H1641.6L1641.75 36.1719ZM1647.26 38.6953V38.8594C1647.26 39.474 1647.18 40.0443 1647.04 40.5703C1646.9 41.0911 1646.69 41.5469 1646.41 41.9375C1646.13 42.3229 1645.79 42.6224 1645.38 42.8359C1644.98 43.0495 1644.51 43.1562 1643.98 43.1562C1643.45 43.1562 1642.99 43.0599 1642.59 42.8672C1642.2 42.6693 1641.87 42.3906 1641.6 42.0312C1641.33 41.6719 1641.11 41.25 1640.95 40.7656C1640.78 40.276 1640.67 39.7396 1640.6 39.1562V38.5234C1640.67 37.9036 1640.78 37.3411 1640.95 36.8359C1641.11 36.3307 1641.33 35.8958 1641.6 35.5312C1641.87 35.1667 1642.2 34.8854 1642.59 34.6875C1642.98 34.4896 1643.44 34.3906 1643.96 34.3906C1644.49 34.3906 1644.96 34.4948 1645.38 34.7031C1645.79 34.9062 1646.13 35.1979 1646.41 35.5781C1646.7 35.9531 1646.91 36.4062 1647.05 36.9375C1647.19 37.4635 1647.26 38.0495 1647.26 38.6953ZM1645.38 38.8594V38.6953C1645.38 38.3047 1645.34 37.9427 1645.27 37.6094C1645.19 37.2708 1645.08 36.974 1644.92 36.7188C1644.77 36.4635 1644.57 36.2656 1644.32 36.125C1644.08 35.9792 1643.79 35.9062 1643.45 35.9062C1643.12 35.9062 1642.83 35.9635 1642.59 36.0781C1642.35 36.1875 1642.15 36.3411 1641.99 36.5391C1641.83 36.737 1641.71 36.9688 1641.62 37.2344C1641.53 37.4948 1641.47 37.7786 1641.43 38.0859V39.6016C1641.49 39.9766 1641.6 40.3203 1641.75 40.6328C1641.9 40.9453 1642.11 41.1953 1642.39 41.3828C1642.67 41.5651 1643.03 41.6562 1643.47 41.6562C1643.81 41.6562 1644.1 41.5833 1644.34 41.4375C1644.58 41.2917 1644.77 41.0911 1644.92 40.8359C1645.08 40.5755 1645.19 40.276 1645.27 39.9375C1645.34 39.599 1645.38 39.2396 1645.38 38.8594ZM1648.5 38.8672V38.6875C1648.5 38.0781 1648.59 37.513 1648.77 36.9922C1648.94 36.4661 1649.2 36.0104 1649.53 35.625C1649.87 35.2344 1650.28 34.9323 1650.77 34.7188C1651.26 34.5 1651.81 34.3906 1652.42 34.3906C1653.04 34.3906 1653.59 34.5 1654.08 34.7188C1654.57 34.9323 1654.98 35.2344 1655.32 35.625C1655.66 36.0104 1655.92 36.4661 1656.09 36.9922C1656.27 37.513 1656.36 38.0781 1656.36 38.6875V38.8672C1656.36 39.4766 1656.27 40.0417 1656.09 40.5625C1655.92 41.0833 1655.66 41.5391 1655.32 41.9297C1654.98 42.3151 1654.57 42.6172 1654.09 42.8359C1653.6 43.0495 1653.05 43.1562 1652.44 43.1562C1651.82 43.1562 1651.26 43.0495 1650.77 42.8359C1650.29 42.6172 1649.88 42.3151 1649.54 41.9297C1649.2 41.5391 1648.94 41.0833 1648.77 40.5625C1648.59 40.0417 1648.5 39.4766 1648.5 38.8672ZM1650.38 38.6875V38.8672C1650.38 39.2474 1650.42 39.6068 1650.5 39.9453C1650.58 40.2839 1650.7 40.5807 1650.87 40.8359C1651.03 41.0911 1651.25 41.2917 1651.51 41.4375C1651.77 41.5833 1652.08 41.6562 1652.44 41.6562C1652.79 41.6562 1653.09 41.5833 1653.34 41.4375C1653.6 41.2917 1653.82 41.0911 1653.98 40.8359C1654.15 40.5807 1654.27 40.2839 1654.35 39.9453C1654.43 39.6068 1654.48 39.2474 1654.48 38.8672V38.6875C1654.48 38.3125 1654.43 37.9583 1654.35 37.625C1654.27 37.2865 1654.15 36.987 1653.98 36.7266C1653.81 36.4661 1653.6 36.263 1653.34 36.1172C1653.08 35.9661 1652.78 35.8906 1652.42 35.8906C1652.07 35.8906 1651.76 35.9661 1651.5 36.1172C1651.24 36.263 1651.03 36.4661 1650.87 36.7266C1650.7 36.987 1650.58 37.2865 1650.5 37.625C1650.42 37.9583 1650.38 38.3125 1650.38 38.6875ZM1661.39 41.6562C1661.7 41.6562 1661.97 41.5964 1662.22 41.4766C1662.47 41.3516 1662.67 41.1797 1662.82 40.9609C1662.98 40.7422 1663.06 40.4896 1663.08 40.2031H1664.85C1664.84 40.75 1664.68 41.2474 1664.37 41.6953C1664.05 42.1432 1663.64 42.5 1663.12 42.7656C1662.61 43.026 1662.04 43.1562 1661.41 43.1562C1660.77 43.1562 1660.21 43.0469 1659.73 42.8281C1659.25 42.6042 1658.85 42.2969 1658.53 41.9062C1658.21 41.5156 1657.97 41.0651 1657.81 40.5547C1657.66 40.0443 1657.58 39.4974 1657.58 38.9141V38.6406C1657.58 38.0573 1657.66 37.5104 1657.81 37C1657.97 36.4844 1658.21 36.0312 1658.53 35.6406C1658.85 35.25 1659.25 34.9453 1659.73 34.7266C1660.21 34.5026 1660.77 34.3906 1661.41 34.3906C1662.08 34.3906 1662.68 34.526 1663.19 34.7969C1663.7 35.0625 1664.1 35.4349 1664.39 35.9141C1664.69 36.388 1664.84 36.9401 1664.85 37.5703H1663.08C1663.06 37.2578 1662.98 36.9766 1662.84 36.7266C1662.71 36.4714 1662.52 36.2682 1662.27 36.1172C1662.02 35.9661 1661.73 35.8906 1661.38 35.8906C1661 35.8906 1660.69 35.9688 1660.44 36.125C1660.19 36.276 1659.99 36.4844 1659.85 36.75C1659.71 37.0104 1659.61 37.3047 1659.55 37.6328C1659.49 37.9557 1659.46 38.2917 1659.46 38.6406V38.9141C1659.46 39.263 1659.49 39.6016 1659.55 39.9297C1659.6 40.2578 1659.7 40.5521 1659.84 40.8125C1659.99 41.0677 1660.19 41.2734 1660.44 41.4297C1660.69 41.5807 1661.01 41.6562 1661.39 41.6562ZM1668.24 40.25L1671.56 34.5469H1673.45V43H1671.56V37.2891L1668.24 43H1666.36V34.5469H1668.24V40.25ZM1679.36 34.5469V43H1677.47V34.5469H1679.36ZM1682.13 34.5469V36.0312H1674.74V34.5469H1682.13ZM1684.79 37.2344H1687.28C1688.01 37.2344 1688.63 37.3568 1689.14 37.6016C1689.65 37.8464 1690.04 38.1875 1690.3 38.625C1690.58 39.0573 1690.71 39.5521 1690.71 40.1094C1690.71 40.5208 1690.64 40.9036 1690.48 41.2578C1690.33 41.6068 1690.11 41.9115 1689.81 42.1719C1689.52 42.4323 1689.16 42.6354 1688.73 42.7812C1688.31 42.9271 1687.83 43 1687.28 43H1683.54V34.5469H1685.43V41.5078H1687.28C1687.66 41.5078 1687.96 41.4427 1688.18 41.3125C1688.4 41.1823 1688.57 41.013 1688.66 40.8047C1688.77 40.5964 1688.82 40.375 1688.82 40.1406C1688.82 39.901 1688.77 39.6745 1688.66 39.4609C1688.57 39.2474 1688.4 39.0729 1688.18 38.9375C1687.96 38.8021 1687.66 38.7344 1687.28 38.7344H1684.79V37.2344ZM1697.73 34.5469H1699.62L1699.52 37.5234C1699.5 38.388 1699.4 39.1302 1699.23 39.75C1699.05 40.3698 1698.83 40.8932 1698.55 41.3203C1698.28 41.7422 1697.97 42.0885 1697.62 42.3594C1697.27 42.6302 1696.91 42.8438 1696.53 43H1695.98V41.5156L1696.24 41.5C1696.47 41.2604 1696.66 41.0208 1696.82 40.7812C1696.99 40.5365 1697.13 40.2682 1697.24 39.9766C1697.36 39.6797 1697.45 39.3333 1697.51 38.9375C1697.58 38.5417 1697.62 38.0703 1697.64 37.5234L1697.73 34.5469ZM1698.23 34.5469H1703.59V43H1701.72V36.1406H1698.23V34.5469ZM1695.55 41.5H1704.75V45.5156H1702.87V43H1697.45V45.5156H1695.54L1695.55 41.5ZM1705.73 38.8672V38.6875C1705.73 38.0781 1705.82 37.513 1706 36.9922C1706.18 36.4661 1706.43 36.0104 1706.77 35.625C1707.1 35.2344 1707.52 34.9323 1708 34.7188C1708.49 34.5 1709.04 34.3906 1709.66 34.3906C1710.28 34.3906 1710.83 34.5 1711.31 34.7188C1711.8 34.9323 1712.22 35.2344 1712.55 35.625C1712.89 36.0104 1713.15 36.4661 1713.33 36.9922C1713.51 37.513 1713.59 38.0781 1713.59 38.6875V38.8672C1713.59 39.4766 1713.51 40.0417 1713.33 40.5625C1713.15 41.0833 1712.89 41.5391 1712.55 41.9297C1712.22 42.3151 1711.8 42.6172 1711.32 42.8359C1710.84 43.0495 1710.29 43.1562 1709.67 43.1562C1709.05 43.1562 1708.5 43.0495 1708.01 42.8359C1707.52 42.6172 1707.11 42.3151 1706.77 41.9297C1706.43 41.5391 1706.18 41.0833 1706 40.5625C1705.82 40.0417 1705.73 39.4766 1705.73 38.8672ZM1707.62 38.6875V38.8672C1707.62 39.2474 1707.66 39.6068 1707.73 39.9453C1707.81 40.2839 1707.93 40.5807 1708.1 40.8359C1708.27 41.0911 1708.48 41.2917 1708.74 41.4375C1709 41.5833 1709.31 41.6562 1709.67 41.6562C1710.02 41.6562 1710.32 41.5833 1710.58 41.4375C1710.84 41.2917 1711.05 41.0911 1711.22 40.8359C1711.39 40.5807 1711.51 40.2839 1711.59 39.9453C1711.67 39.6068 1711.71 39.2474 1711.71 38.8672V38.6875C1711.71 38.3125 1711.67 37.9583 1711.59 37.625C1711.51 37.2865 1711.38 36.987 1711.21 36.7266C1711.04 36.4661 1710.83 36.263 1710.57 36.1172C1710.32 35.9661 1710.01 35.8906 1709.66 35.8906C1709.3 35.8906 1708.99 35.9661 1708.73 36.1172C1708.48 36.263 1708.27 36.4661 1708.1 36.7266C1707.93 36.987 1707.81 37.2865 1707.73 37.625C1707.66 37.9583 1707.62 38.3125 1707.62 38.6875ZM1718.62 41.6562C1718.93 41.6562 1719.21 41.5964 1719.45 41.4766C1719.7 41.3516 1719.9 41.1797 1720.05 40.9609C1720.21 40.7422 1720.3 40.4896 1720.31 40.2031H1722.09C1722.08 40.75 1721.91 41.2474 1721.6 41.6953C1721.29 42.1432 1720.88 42.5 1720.36 42.7656C1719.84 43.026 1719.27 43.1562 1718.65 43.1562C1718 43.1562 1717.44 43.0469 1716.96 42.8281C1716.48 42.6042 1716.08 42.2969 1715.77 41.9062C1715.45 41.5156 1715.21 41.0651 1715.05 40.5547C1714.89 40.0443 1714.81 39.4974 1714.81 38.9141V38.6406C1714.81 38.0573 1714.89 37.5104 1715.05 37C1715.21 36.4844 1715.45 36.0312 1715.77 35.6406C1716.08 35.25 1716.48 34.9453 1716.96 34.7266C1717.44 34.5026 1718 34.3906 1718.64 34.3906C1719.32 34.3906 1719.91 34.526 1720.42 34.7969C1720.93 35.0625 1721.33 35.4349 1721.62 35.9141C1721.92 36.388 1722.08 36.9401 1722.09 37.5703H1720.31C1720.3 37.2578 1720.22 36.9766 1720.08 36.7266C1719.94 36.4714 1719.75 36.2682 1719.5 36.1172C1719.26 35.9661 1718.96 35.8906 1718.62 35.8906C1718.24 35.8906 1717.92 35.9688 1717.67 36.125C1717.42 36.276 1717.23 36.4844 1717.09 36.75C1716.95 37.0104 1716.84 37.3047 1716.78 37.6328C1716.72 37.9557 1716.7 38.2917 1716.7 38.6406V38.9141C1716.7 39.263 1716.72 39.6016 1716.78 39.9297C1716.84 40.2578 1716.94 40.5521 1717.08 40.8125C1717.22 41.0677 1717.42 41.2734 1717.67 41.4297C1717.92 41.5807 1718.24 41.6562 1718.62 41.6562ZM1727.45 34.5469V43H1725.56V34.5469H1727.45ZM1730.23 34.5469V36.0312H1722.84V34.5469H1730.23ZM1734.03 42.0781L1736.33 34.5469H1738.34L1734.95 44.2891C1734.88 44.4974 1734.77 44.724 1734.65 44.9688C1734.52 45.2135 1734.36 45.4453 1734.16 45.6641C1733.96 45.888 1733.71 46.0677 1733.41 46.2031C1733.12 46.3438 1732.76 46.4141 1732.34 46.4141C1732.17 46.4141 1732.01 46.3984 1731.85 46.3672C1731.7 46.3411 1731.56 46.3125 1731.42 46.2812L1731.41 44.8438C1731.47 44.849 1731.53 44.8542 1731.6 44.8594C1731.68 44.8646 1731.74 44.8672 1731.79 44.8672C1732.1 44.8672 1732.36 44.8281 1732.57 44.75C1732.78 44.6771 1732.95 44.5573 1733.08 44.3906C1733.21 44.224 1733.33 44 1733.42 43.7188L1734.03 42.0781ZM1732.73 34.5469L1734.74 40.875L1735.08 42.8594L1733.77 43.1953L1730.7 34.5469H1732.73ZM1745.09 34.5469V36.0469H1740.92V34.5469H1745.09ZM1741.37 34.5469V43H1739.48V34.5469H1741.37ZM1746.57 34.5469V43H1744.68V34.5469H1746.57Z"
                    fill="#212121"
                  />
                </svg>
              </SvgIcon>
            }
          ></Button>
          <Button
            sx={{
              width: "1%",
              maxHeight: "30px",
              paddingLeft: "20px",
              marginRight: "1px",
            }}
            startIcon={
              <SvgIcon
                sx={{
                  paddingBottom: "118px",
                  paddingRight: "15px",
                  height: "155px",
                  width: "150px",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
                  <rect
                    x="1816"
                    y="14"
                    width="16"
                    height="16"
                    rx="8"
                    fill="#DC2626"
                  />
                  <path
                    d="M1827.11 22.959V24.084H1820.96L1820.91 23.2344L1824.59 17.4688H1825.72L1824.5 19.5664L1822.38 22.959H1827.11ZM1826.04 17.4688V26H1824.63V17.4688H1826.04Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M86.292 137.593C86.7062 137.593 87.042 137.929 87.042 138.343V138.708C87.042 140.388 85.6802 141.75 84 141.75C82.32 141.75 80.958 140.388 80.958 138.709V138.344C80.958 137.93 81.2938 137.594 81.708 137.594C82.1222 137.594 82.458 137.93 82.458 138.344V138.709C82.458 139.56 83.148 140.25 84 140.25C84.8518 140.25 85.542 139.56 85.542 138.708V138.343C85.542 137.929 85.8778 137.593 86.292 137.593Z"
                    fill="#212121"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M81.417 124.833C81.417 123.407 82.5725 122.25 84 122.25C85.4275 122.25 86.583 123.407 86.583 124.833V125.751C86.583 126.165 86.2472 126.501 85.833 126.501C85.4188 126.501 85.083 126.165 85.083 125.751V124.833C85.083 124.235 84.5985 123.75 84 123.75C83.4015 123.75 82.917 124.235 82.917 124.833V125.751C82.917 126.165 82.5812 126.501 82.167 126.501C81.7528 126.501 81.417 126.165 81.417 125.751V124.833Z"
                    fill="#212121"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M83.094 126.407C81.0061 126.407 79.313 128.099 79.313 130.188V132.985C79.313 133.714 79.0228 134.414 78.5073 134.929L77.8663 135.57C77.6318 135.805 77.5 136.123 77.5 136.454C77.5 137.084 78.0102 137.594 78.64 137.594H89.361C89.9908 137.594 90.501 137.084 90.501 136.454C90.501 136.123 90.3692 135.805 90.1347 135.57L89.4937 134.929C88.9782 134.414 88.688 133.714 88.688 132.985V130.188C88.688 128.1 86.9957 126.407 84.907 126.407H83.094ZM77.813 130.188C77.813 127.271 80.1779 124.907 83.094 124.907H84.907C87.8243 124.907 90.188 127.272 90.188 130.188V132.985C90.188 133.316 90.3198 133.634 90.5543 133.869L91.1953 134.51C91.7108 135.025 92.001 135.725 92.001 136.454C92.001 137.912 90.8192 139.094 89.361 139.094H78.64C77.1818 139.094 76 137.912 76 136.454C76 135.725 76.2902 135.025 76.8057 134.51L77.4467 133.869C77.6812 133.634 77.813 133.316 77.813 132.985V130.188Z"
                    fill="#212121"
                  />
                </svg>
              </SvgIcon>
            }
          ></Button>
          <Avatar
            sx={{ bgcolor: deepOrange[500], height: "30px", width: "30px" }}
          ></Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;