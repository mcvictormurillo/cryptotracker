import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import Svg, {
    Image as SvgImage,
    Defs,
    //Svg,
    Path,
    Mask
} from "react-native-svg";

function Index(props) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.rectangle1Stack}>
                    <View style={styles.rectangle1}></View>
                    <ImageBackground
                        style={styles.backgroundGreen}
                        imageStyle={styles.backgroundGreen_imageStyle}
                        source={require("../assets/images/Gradient_AmbNsvv.png")}
                    >
                        <View style={styles.osStatusOnLight}>
                            <View style={styles.boundary}>
                                <View style={styles.timeRow}>
                                    <View style={styles.time}>
                                        <View style={styles.time2}>
                                            <Text style={styles.style}>9:41</Text>
                                        </View>
                                    </View>
                                    <View style={styles.container}>
                                        <View style={styles.combinedShapePathRow}>
                                            <Svg
                                                viewBox="0 0 17.1 10.7"
                                                style={styles.combinedShapePath}
                                            >
                                                <Path
                                                    strokeWidth={0}
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M15.30 10.70 L14.10 9.50 L14.10 1.20 L15.30 0.00 L15.90 0.00 L17.10 1.20 L17.10 9.50 L15.90 10.70 Z M10.60 10.70 L9.40 9.50 L9.40 3.60 L10.60 2.40 L11.20 2.40 L12.40 3.60 L12.40 9.50 L11.20 10.70 Z M6.00 10.70 L4.80 9.50 L4.80 5.90 L6.00 4.70 L6.60 4.70 L7.80 5.90 L7.80 9.50 L6.60 10.70 Z M1.20 10.70 L0.00 9.50 L0.00 7.90 L1.20 6.70 L1.80 6.70 L3.00 7.90 L3.00 9.50 L1.80 10.70 Z"
                                                ></Path>
                                            </Svg>
                                            <Svg viewBox="0 0 15.4 11.06" style={styles.wifiPath}>
                                                <Path
                                                    strokeWidth={0}
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M7.70 11.06 L7.93 10.96 L9.94 8.93 C9.94 8.93 10.03 8.79 10.03 8.70 C10.03 8.61 9.99 8.53 9.93 8.47 C8.64 7.38 6.76 7.38 5.47 8.47 C5.41 8.53 5.37 8.61 5.37 8.70 C5.37 8.79 5.46 8.93 5.46 8.93 L7.48 10.96 L7.70 11.06 Z M11.24 7.49 L11.46 7.40 L12.62 6.22 C12.62 6.22 12.71 6.08 12.71 5.99 C12.71 5.90 12.68 5.82 12.62 5.76 C9.84 3.18 5.55 3.18 2.78 5.76 C2.72 5.82 2.68 5.90 2.68 5.99 C2.68 6.08 2.78 6.22 2.78 6.22 L3.95 7.40 C3.95 7.40 4.26 7.52 4.38 7.40 C6.27 5.70 9.14 5.70 11.02 7.40 C11.08 7.46 11.24 7.49 11.24 7.49 Z M14.14 4.69 L15.30 3.51 C15.30 3.51 15.40 3.37 15.40 3.28 C15.40 3.20 15.36 3.12 15.30 3.05 C11.05 -1.02 4.35 -1.02 0.10 3.05 C0.03 3.12 0.00 3.20 0.00 3.28 C0.00 3.37 0.10 3.51 0.10 3.51 L1.26 4.69 C1.26 4.69 1.40 4.78 1.48 4.78 C1.56 4.78 1.64 4.75 1.70 4.69 C5.06 1.50 10.34 1.50 13.70 4.69 C13.76 4.75 13.84 4.78 13.92 4.78 C14.00 4.78 14.14 4.69 14.14 4.69 Z"
                                                ></Path>
                                            </Svg>
                                            <View style={styles.battery}>
                                                <View style={styles.rectanglePathStack}>
                                                    <Svg
                                                        viewBox="0 0 24.52 11.54"
                                                        style={styles.rectanglePath}
                                                    >
                                                        <Path
                                                            strokeWidth={0}
                                                            fill="rgba(255,255,255,1)"
                                                            fillOpacity={1}
                                                            strokeOpacity={1}
                                                            d="M3.61 11.52 C3.61 11.52 2.12 11.47 1.45 11.15 C1.00 10.91 0.63 10.54 0.39 10.09 C0.08 9.42 0.02 7.93 0.02 7.93 L0.02 3.61 C0.02 3.61 0.08 2.12 0.39 1.45 C0.63 1.00 1.00 0.63 1.45 0.39 C2.12 0.08 3.61 0.02 3.61 0.02 L18.43 0.02 C18.43 0.02 19.92 0.08 20.59 0.39 C21.04 0.63 21.41 1.00 21.65 1.45 C21.96 2.12 22.02 3.61 22.02 3.61 L22.02 7.93 C22.02 7.93 21.97 9.42 21.65 10.09 C21.41 10.54 21.04 10.91 20.59 11.15 C19.92 11.46 18.43 11.52 18.43 11.52 L3.61 11.52 Z M1.92 1.28 C1.64 1.42 1.42 1.65 1.27 1.93 C1.04 2.46 1.02 3.61 1.02 3.61 L1.02 7.93 C1.02 7.93 1.05 9.09 1.28 9.62 C1.42 9.90 1.65 10.12 1.93 10.27 C2.46 10.50 3.61 10.53 3.61 10.53 L18.43 10.53 C18.43 10.53 19.59 10.50 20.12 10.27 C20.39 10.12 20.62 9.90 20.76 9.62 C21.00 9.09 21.02 7.93 21.02 7.93 L21.02 3.61 C21.02 3.61 21.00 2.45 20.76 1.92 C20.62 1.64 20.39 1.42 20.12 1.27 C19.59 1.04 18.43 1.02 18.43 1.02 L3.61 1.02 C3.61 1.02 2.45 1.05 1.92 1.28 Z M23.02 3.71 C23.02 3.71 24.52 4.47 24.52 5.71 C24.52 6.95 23.02 7.71 23.02 7.71 Z"
                                                        ></Path>
                                                    </Svg>
                                                    <View style={styles.rectangle2}></View>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.backIcon}>
                            <View style={styles.rectangle2944}>
                                <Svg viewBox="0 0 19.26 16" style={styles.path12399}>
                                    <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M18.18 6.49 L18.21 6.50 L5.32 6.50 L9.37 2.44 C9.78 2.02 9.78 1.35 9.37 0.94 L8.74 0.31 C8.33 -0.10 7.66 -0.10 7.25 0.31 L0.31 7.26 C-0.10 7.67 -0.10 8.34 0.31 8.75 L7.25 15.70 C7.67 16.11 8.33 16.11 8.74 15.70 L9.37 15.07 C9.57 14.87 9.68 14.60 9.68 14.32 C9.68 14.05 9.57 13.78 9.37 13.59 L5.27 9.51 L18.19 9.51 C18.78 9.50 19.26 9.02 19.26 8.43 L19.26 7.53 C19.24 6.95 18.76 6.49 18.18 6.49 Z"
                                    ></Path>
                                </Svg>
                            </View>
                        </View>
                        <View style={styles.welcomeBackLuisRow}>
                            <Text style={styles.welcomeBackLuis}>Welcome back,{"\n"}Luis!</Text>
                            <View style={styles.avatarStack}>
                                <View style={styles.avatar}>
                                    <View style={styles.maskStack}>
                                        <Svg viewBox="0 0 60 60" style={styles.mask}>
                                            <Path
                                                strokeWidth={0}
                                                fill="rgba(216,216,216,1)"
                                                fillOpacity={1}
                                                strokeOpacity={1}
                                                d="M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
                                            ></Path>
                                        </Svg>
                                        <Svg viewBox="0 0 60 60" style={styles.image24}>
                                            <Defs>
                                                <Mask id="iRUvW4v" x={0} y={0}>
                                                    <Path
                                                        fill="white"
                                                        d={
                                                            "M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
                                                        }
                                                    />
                                                </Mask>
                                            </Defs>
                                            <SvgImage
                                                href={require("../assets/images/aae93051543aa67225129a3be9a032ffe10b2c65.png")}
                                                x={-18.51063829787234}
                                                y={-36.38297872340426}
                                                width={97.0212765957447}
                                                height={133.951367781155}
                                                mask={"url(#iRUvW4v)"}
                                            >
                                                <Svg viewBox="-1 -1 64 64" style={styles.oval}>
                                                    <Defs>
                                                        <Mask id="xOWZXI" x={0} y={0} width={64} height={64}>
                                                            <Path
                                                                d="M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
                                                                fill="white"
                                                            />
                                                        </Mask>
                                                    </Defs>
                                                    <Path
                                                        strokeWidth={2}
                                                        fill="transparent"
                                                        stroke="rgba(255,255,255,1)"
                                                        fillOpacity={1}
                                                        strokeOpacity={1}
                                                        mask="url(#xOWZXI)"
                                                        d="M31.00 60.00 C47.02 60.00 60.00 47.02 60.00 31.00 C60.00 14.98 47.02 2.00 31.00 2.00 C14.98 2.00 2.00 14.98 2.00 31.00 C2.00 47.02 14.98 60.00 31.00 60.00 Z"
                                                    ></Path>
                                                </Svg>
                                            </SvgImage>
                                        </Svg>
                                    </View>
                                </View>
                                <Svg viewBox="0 0 28 28" style={styles.ellipse494}>
                                    <Path
                                        strokeWidth={0}
                                        fill="rgba(255,255,255,1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        d="M14.00 28.00 C21.73 28.00 28.00 21.73 28.00 14.00 C28.00 6.27 21.73 0.00 14.00 0.00 C6.27 0.00 0.00 6.27 0.00 14.00 C0.00 21.73 6.27 28.00 14.00 28.00 Z"
                                    ></Path>
                                </Svg>
                                <View style={styles.editIcon}>
                                    <View style={styles.rectangle2943}>
                                        <View style={styles.editIcon2}>
                                            <View style={styles.edit}>
                                                <Svg
                                                    viewBox="0 0 13.55 13.62"
                                                    style={styles.path12398Path}
                                                >
                                                    <Path
                                                        strokeWidth={0}
                                                        fill="rgba(112,94,230,1)"
                                                        fillOpacity={1}
                                                        strokeOpacity={1}
                                                        d="M8.61 2.28 L11.34 5.01 L3.09 13.26 L0.33 13.62 C0.33 13.62 0.15 13.60 0.08 13.54 C0.02 13.47 0.00 13.29 0.00 13.29 L0.35 10.53 L8.61 2.28 Z M13.47 2.42 L13.47 2.81 L12.16 4.19 L9.43 1.46 L10.73 0.09 C10.73 0.09 10.85 0.00 10.93 0.00 C11.01 0.00 11.14 0.09 11.14 0.09 L13.47 2.42 L13.47 2.42 Z"
                                                    ></Path>
                                                </Svg>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.style1Row}>
                            <Text style={styles.style1}>79</Text>
                            <Text style={styles.k}>28k</Text>
                            <Text style={styles.style2}>134</Text>
                        </View>
                        <View style={styles.soldRow}>
                            <Text style={styles.sold}>Sold</Text>
                            <Text style={styles.points}>Points</Text>
                            <Text style={styles.points1}>Points</Text>
                        </View>
                        <View style={styles.backgroundGray2Stack}>
                            <Svg viewBox="0 0 375 545" style={styles.backgroundGray2}>
                                <Path
                                    strokeWidth={0}
                                    fill="rgba(245,247,249,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 L355.00 0.00 C366.05 0.00 375.00 8.95 375.00 20.00 L375.00 545.00 L0.00 545.00 L0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                ></Path>
                            </Svg>
                            <Text style={styles.yourOffers}>Your offers</Text>
                            <Text style={styles.information}>Information</Text>
                            <Text style={styles.inbox}>Inbox</Text>
                            <View style={styles.group}>
                                <View style={styles.rectangle94}></View>
                            </View>
                            <View style={styles.group1}>
                                <View style={styles.rectangle95}></View>
                            </View>
                            <View style={styles.group2}>
                                <View style={styles.rectangle96}></View>
                            </View>
                            <Text style={styles.activeOffers}>Active offers</Text>
                            <Text style={styles.soldProducts}>Sold products</Text>
                            <Text style={styles.statistics}>Statistics</Text>
                            <Text style={styles.settings}>Settings</Text>
                            <Text style={styles.current}>Current</Text>
                            <Text style={styles.archive}>Archive</Text>
                            <View style={styles.enterIcon}>
                                <View style={styles.rectangle2963}>
                                    <View style={styles.enterIcon1}>
                                        <View style={styles.group4077}>
                                            <Svg viewBox="-0.5 -0.5 9 15.96" style={styles.path12400}>
                                                <Path
                                                    strokeWidth={1}
                                                    fill="rgba(46,46,46,1)"
                                                    stroke="rgba(46,46,46,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M0.08 7.16 L6.48 13.85 C6.55 13.94 6.66 13.98 6.77 13.96 C6.88 13.93 6.96 13.85 6.99 13.75 C7.02 13.64 6.98 13.53 6.90 13.45 L0.70 6.96 L6.90 0.47 C6.99 0.36 6.98 0.18 6.87 0.08 C6.76 -0.02 6.59 -0.03 6.48 0.07 L0.08 6.76 C-0.03 6.88 -0.03 7.05 0.08 7.16 Z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enterIcon2}>
                                <View style={styles.rectangle29632}>
                                    <View style={styles.enterIcon2}>
                                        <View style={styles.group40772}>
                                            <Svg viewBox="-0.5 -0.5 9 15.96" style={styles.path124002}>
                                                <Path
                                                    strokeWidth={1}
                                                    fill="rgba(46,46,46,1)"
                                                    stroke="rgba(46,46,46,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M0.08 7.16 L6.48 13.85 C6.55 13.94 6.66 13.98 6.77 13.96 C6.88 13.93 6.96 13.85 6.99 13.75 C7.02 13.64 6.98 13.53 6.90 13.45 L0.70 6.96 L6.90 0.47 C6.99 0.36 6.98 0.18 6.87 0.08 C6.76 -0.02 6.59 -0.03 6.48 0.07 L0.08 6.76 C-0.03 6.88 -0.03 7.05 0.08 7.16 Z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enterIcon3}>
                                <View style={styles.rectangle29633}>
                                    <View style={styles.enterIcon3}>
                                        <View style={styles.group40773}>
                                            <Svg viewBox="-0.5 -0.5 9 15.96" style={styles.path124003}>
                                                <Path
                                                    strokeWidth={1}
                                                    fill="rgba(46,46,46,1)"
                                                    stroke="rgba(46,46,46,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M0.08 7.16 L6.48 13.85 C6.55 13.94 6.66 13.98 6.77 13.96 C6.88 13.93 6.96 13.85 6.99 13.75 C7.02 13.64 6.98 13.53 6.90 13.45 L0.70 6.96 L6.90 0.47 C6.99 0.36 6.98 0.18 6.87 0.08 C6.76 -0.02 6.59 -0.03 6.48 0.07 L0.08 6.76 C-0.03 6.88 -0.03 7.05 0.08 7.16 Z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enterIcon4}>
                                <View style={styles.rectangle29634}>
                                    <View style={styles.enterIcon4}>
                                        <View style={styles.group40774}>
                                            <Svg viewBox="-0.5 -0.5 9 15.96" style={styles.path124004}>
                                                <Path
                                                    strokeWidth={1}
                                                    fill="rgba(46,46,46,1)"
                                                    stroke="rgba(46,46,46,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M0.08 7.16 L6.48 13.85 C6.55 13.94 6.66 13.98 6.77 13.96 C6.88 13.93 6.96 13.85 6.99 13.75 C7.02 13.64 6.98 13.53 6.90 13.45 L0.70 6.96 L6.90 0.47 C6.99 0.36 6.98 0.18 6.87 0.08 C6.76 -0.02 6.59 -0.03 6.48 0.07 L0.08 6.76 C-0.03 6.88 -0.03 7.05 0.08 7.16 Z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enterIcon5}>
                                <View style={styles.rectangle29635}>
                                    <View style={styles.enterIcon5}>
                                        <View style={styles.group40775}>
                                            <Svg viewBox="-0.5 -0.5 9 15.96" style={styles.path124005}>
                                                <Path
                                                    strokeWidth={1}
                                                    fill="rgba(46,46,46,1)"
                                                    stroke="rgba(46,46,46,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M0.08 7.16 L6.48 13.85 C6.55 13.94 6.66 13.98 6.77 13.96 C6.88 13.93 6.96 13.85 6.99 13.75 C7.02 13.64 6.98 13.53 6.90 13.45 L0.70 6.96 L6.90 0.47 C6.99 0.36 6.98 0.18 6.87 0.08 C6.76 -0.02 6.59 -0.03 6.48 0.07 L0.08 6.76 C-0.03 6.88 -0.03 7.05 0.08 7.16 Z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.enterIcon6}>
                                <View style={styles.rectangle29636}>
                                    <View style={styles.enterIcon6}>
                                        <View style={styles.group40776}>
                                            <Svg viewBox="-0.5 -0.5 9 15.96" style={styles.path124006}>
                                                <Path
                                                    strokeWidth={1}
                                                    fill="rgba(46,46,46,1)"
                                                    stroke="rgba(46,46,46,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    d="M0.08 7.16 L6.48 13.85 C6.55 13.94 6.66 13.98 6.77 13.96 C6.88 13.93 6.96 13.85 6.99 13.75 C7.02 13.64 6.98 13.53 6.90 13.45 L0.70 6.96 L6.90 0.47 C6.99 0.36 6.98 0.18 6.87 0.08 C6.76 -0.02 6.59 -0.03 6.48 0.07 L0.08 6.76 C-0.03 6.88 -0.03 7.05 0.08 7.16 Z"
                                                ></Path>
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Svg viewBox="-1 -1 326.05 5" style={styles.line}>
                                <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(250,250,250,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M1.00 1.50 L323.05 1.50 "
                                ></Path>
                            </Svg>
                            <Svg viewBox="-1 -1 326.05 5" style={styles.line2}>
                                <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(250,250,250,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M1.00 1.50 L323.05 1.50 "
                                ></Path>
                            </Svg>
                            <Svg viewBox="-1 -1 326.05 5" style={styles.line3}>
                                <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(250,250,250,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M1.00 1.50 L323.05 1.50 "
                                ></Path>
                            </Svg>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        width: 68,
        flexDirection: "row",
        marginLeft: 0,
        marginTop: 0
    },
    rectangle1: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 812,
        width: 375,
        backgroundColor: "rgba(255,255,255,1)"
    },
    backgroundGreen: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 814,
        width: 375,
        backgroundColor: "transparent"
    },
    backgroundGreen_imageStyle: {},
    osStatusOnLight: {
        height: 44,
        width: 375
    },
    boundary: {
        height: 44,
        width: 375,
        backgroundColor: "rgba(255,255,255,1)",
        flexDirection: "row"
    },
    time: {
        height: 20,
        width: 30
    },
    time2: {
        height: 20,
        width: 30
    },
    style: {
        color: "rgba(255,255,255,1)",
        fontSize: 15,
        fontFamily: "roboto-regular",
        marginLeft: 1
    },
    combinedShapePath: {
        height: 11,
        width: 17,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 1
    },
    wifiPath: {
        height: 11,
        width: 15,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 5
    },
    battery: {
        height: 13,
        width: 26,
        marginLeft: 4
    },
    rectanglePath: {
        position: "absolute",
        height: 12,
        width: 25,
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    rectangle2: {
        position: "absolute",
        top: 1,
        left: 2,
        height: 8,
        width: 18,
        borderRadius: 1.6,
        backgroundColor: "rgba(255,255,255,1)"
    },
    rectanglePathStack: {
        width: 25,
        height: 12,
        marginTop: 1,
        marginLeft: 1
    },
    combinedShapePathRow: {
        height: 13,
        flexDirection: "row",
        flex: 1,
        marginLeft: 1,
        marginTop: 1
    },
    timeRow: {
        height: 20,
        flexDirection: "row",
        flex: 1,
        marginRight: 13,
        marginLeft: 32,
        marginTop: 12
    },
    backIcon: {
        height: 28,
        width: 28,
        marginTop: 15,
        marginLeft: 24
    },
    rectangle2944: {
        height: 28,
        width: 28,
        backgroundColor: "transparent"
    },
    path12399: {
        height: 16,
        width: 19,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 6,
        marginLeft: 4
    },
    welcomeBackLuis: {
        color: "rgba(255,255,255,1)",
        fontSize: 26,
        fontFamily: "roboto-regular"
    },
    avatar: {
        position: "absolute",
        top: 0,
        left: 4,
        height: 60,
        width: 60
    },
    mask: {
        position: "absolute",
        height: 60,
        width: 60,
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    image24: {
        position: "absolute",
        height: 60,
        width: 60,
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    oval: {
        height: 60,
        width: 60,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    maskStack: {
        width: 60,
        height: 60
    },
    ellipse494: {
        position: "absolute",
        height: 28,
        width: 28,
        top: 37,
        left: 0,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    editIcon: {
        position: "absolute",
        top: 37,
        left: 0,
        height: 28,
        width: 28
    },
    rectangle2943: {
        height: 28,
        width: 28,
        backgroundColor: "transparent"
    },
    editIcon2: {
        height: 15,
        width: 16,
        marginTop: 7,
        marginLeft: 5
    },
    edit: {
        height: 14,
        width: 15,
        marginLeft: 1
    },
    path12398Path: {
        height: 14,
        width: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    avatarStack: {
        width: 64,
        height: 65,
        marginLeft: 90,
        marginTop: 9
    },
    welcomeBackLuisRow: {
        height: 74,
        flexDirection: "row",
        marginTop: 18,
        marginLeft: 24,
        marginRight: 24
    },
    style1: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        fontFamily: "roboto-700"
    },
    k: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        fontFamily: "roboto-700",
        marginLeft: 54
    },
    style2: {
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        fontFamily: "roboto-700",
        marginLeft: 40
    },
    style1Row: {
        height: 29,
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 87,
        marginRight: 83
    },
    sold: {
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        fontFamily: "roboto-regular"
    },
    points: {
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        fontFamily: "roboto-regular",
        marginLeft: 64
    },
    points1: {
        color: "rgba(255,255,255,1)",
        fontSize: 10,
        fontFamily: "roboto-regular",
        marginLeft: 52
    },
    soldRow: {
        height: 15,
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 91,
        marginRight: 92
    },
    backgroundGray2: {
        position: "absolute",
        height: 545,
        width: 375,
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    yourOffers: {
        position: "absolute",
        top: 18,
        left: 28,
        color: "rgba(193,193,193,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    information: {
        position: "absolute",
        top: 161,
        left: 28,
        color: "rgba(193,193,193,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    inbox: {
        position: "absolute",
        top: 304,
        left: 28,
        color: "rgba(193,193,193,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    group: {
        position: "absolute",
        top: 43,
        left: 26,
        height: 100,
        width: 324,
        shadowColor: "rgba(0,0,0,0.04)",
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 25,
        shadowOpacity: 1
    },
    rectangle94: {
        height: 100,
        width: 324,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,1)"
    },
    group1: {
        position: "absolute",
        top: 186,
        left: 26,
        height: 100,
        width: 324,
        shadowColor: "rgba(0,0,0,0.04)",
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 25,
        shadowOpacity: 1
    },
    rectangle95: {
        height: 100,
        width: 324,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,1)"
    },
    group2: {
        position: "absolute",
        top: 329,
        left: 26,
        height: 100,
        width: 324,
        shadowColor: "rgba(0,0,0,0.04)",
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowRadius: 25,
        shadowOpacity: 1
    },
    rectangle96: {
        height: 100,
        width: 324,
        borderRadius: 4,
        backgroundColor: "rgba(255,255,255,1)"
    },
    activeOffers: {
        position: "absolute",
        top: 57,
        left: 42,
        color: "rgba(46,46,46,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    soldProducts: {
        position: "absolute",
        top: 108,
        left: 42,
        color: "rgba(46,46,46,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    statistics: {
        position: "absolute",
        top: 200,
        left: 42,
        color: "rgba(46,46,46,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    settings: {
        position: "absolute",
        top: 251,
        left: 42,
        color: "rgba(46,46,46,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    current: {
        position: "absolute",
        top: 343,
        left: 42,
        color: "rgba(46,46,46,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    archive: {
        position: "absolute",
        top: 393,
        left: 42,
        color: "rgba(46,46,46,1)",
        fontSize: 14,
        fontFamily: "roboto-regular"
    },
    enterIcon: {
        position: "absolute",
        top: 54,
        left: 306,
        height: 28,
        width: 28
    },
    rectangle2963: {
        height: 28,
        width: 28,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        backgroundColor: "transparent"
    },
    enterIcon1: {
        height: 14,
        width: 9,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        marginTop: 7,
        marginLeft: 10
    },
    group4077: {
        height: 14,
        width: 8
    },
    path12400: {
        height: 16,
        width: 9,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    enterIcon2: {
        height: 14,
        width: 9,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        marginTop: 7,
        marginLeft: 10
    },
    rectangle29632: {
        height: 28,
        width: 28,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        backgroundColor: "transparent"
    },
    group40772: {
        height: 14,
        width: 8
    },
    path124002: {
        height: 16,
        width: 9,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    enterIcon3: {
        height: 14,
        width: 9,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        marginTop: 7,
        marginLeft: 10
    },
    rectangle29633: {
        height: 28,
        width: 28,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        backgroundColor: "transparent"
    },
    group40773: {
        height: 14,
        width: 8
    },
    path124003: {
        height: 16,
        width: 9,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    enterIcon4: {
        height: 14,
        width: 9,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        marginTop: 7,
        marginLeft: 10
    },
    rectangle29634: {
        height: 28,
        width: 28,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        backgroundColor: "transparent"
    },
    group40774: {
        height: 14,
        width: 8
    },
    path124004: {
        height: 16,
        width: 9,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    enterIcon5: {
        height: 14,
        width: 9,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        marginTop: 7,
        marginLeft: 10
    },
    rectangle29635: {
        height: 28,
        width: 28,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        backgroundColor: "transparent"
    },
    group40775: {
        height: 14,
        width: 8
    },
    path124005: {
        height: 16,
        width: 9,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    enterIcon6: {
        height: 14,
        width: 9,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        marginTop: 7,
        marginLeft: 10
    },
    rectangle29636: {
        height: 28,
        width: 28,
        transform: [
            {
                rotate: "180.00deg"
            }
        ],
        backgroundColor: "transparent"
    },
    group40776: {
        height: 14,
        width: 8
    },
    path124006: {
        height: 16,
        width: 9,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
    },
    line: {
        position: "absolute",
        height: 5,
        width: 326,
        top: 92,
        left: 26,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    line2: {
        position: "absolute",
        height: 5,
        width: 326,
        top: 235,
        left: 26,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    line3: {
        position: "absolute",
        height: 5,
        width: 326,
        top: 377,
        left: 26,
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    backgroundGray2Stack: {
        width: 375,
        height: 545,
        marginTop: 21
    },
    rectangle1Stack: {
        width: 375,
        height: 814
    }
});

export default Index;
