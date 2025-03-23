// 
genre = "PSG WORKS";
title = "TRANOID";
artist = "T&amp;S seq. factory";
bpm = "130�`190";
measure = 62;
gap--;
tc[1] = ["1300"];
tc[22] = ["1800"];
tc[23] = ["1850"];
tc[24] = ["1900"];

notes = 414;
sp = [, sp[1], 
    "#ToFtoFt", "#ToFtoNB", "#ToFtoFt", "#ToFtoNB", 
    "#ToAA9aK", "#TxdUzvO", "#TgAAmnr", "20", 
    "#ToAA9dZ", "#TYN6mdf", "#TwAAmnr", "#Q0A1Cg_EQ", 
    "#TwAA0Wi", "#T9Zd8Uv", "#TwAAd8R", "#Ql3", 
    "#TYAA0Wi", "#T9Zd9d+", "#TYAAimm", "#B3", 
    "21", 
    "#R1bb_", "#R1bb", "#R1bb", "#R1bb-OAw", 
    "#R1bb_", "#R1bb", "#R1bb", "#R1OAYBZ5EI3FQ", 
    "#X4HA4wGAw-Q0", "#R1bb", "#XgEAg4HA4-c", "#OIIJZOAYAD", 
    "#X4HA4wGAw-c", "#R1bb", , "#QKm_FQ", 
    "#OYIws-Q0", "#QZJbb", "#OgQws", "#QZJbb9CFQ", 
    "#OoY43", "#Qul", "#OffWW", "#OKm9Y", 
    "#OgIws_", "#QZJbb", "#OgQws", "#QZJbb9CFQ", 
    "#OoY43", "#Qul_Eg", "#OffWW", "#OKm9Y_Eg", 
    "#OffWW", "#OKcr9", "#OffWW", "#OKcu7", 
    "#O0U9Z", "#QQD5AA", "#QwCbE", "#9gAA_Bg"];
sp[37] = sp[33];

//     0       1       2       3       4       5       6       7
b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

// ToFtoNB
// after switch:
// v2s = 0
// v2p = 32
// v2t = 1 (_ sets it to 2)
// v2b = 7
// v2o = oFtoNB
// sft = 8
// v2c = 0 (- sets it to 1, _ set it to 2)

// v2k = ""
// for (i2 = 0; i2 < v2o.length; i2++) {
//   v2x = b64.indexOf(v2o.charAt(i2));
//   v2k += Math.floor(v2x / 8) + "" + v2x % 8;
// }
// after 'o': v2x = 40, v2k = "50"
// after 'F': v2x =  5, v2k = "5005"
// after 't': v2x = 45, v2k = "500555"
// after 'o': v2x = 40, v2k = "50055550"
// after 'N': v2x = 13, v2k = "5005555015"
// after 'B': v2x =  1, v2k = "500555501501"

// R, X, O, Q
// #R1bb -> "1111"
// OAw -> "0000011000"
/*
    v2x = b64.indexOf(v2o.charAt(i2));
    for (i3 = 5; i3 >= 0; i3--)
        v2k += (v2x >> i3) & 1 ? 1 : 0;
*/
// after 'A': v2k = "00000"
// after 'w': v2k = "0000011000"

// first letter has something to do with the spacing

function bars_(n, mn) {
    for (h = 1; h <= 2; h++) {
        for (mm = 0; mm <= m; mm++) {
            sft = 0;

            // sdd = input string
            // sft = input index
            // v2s, v2p, v2t, v2c, v2o = ?

            o += "style='top:" + (nbar * hs - Math.floor(v2h * hs / 3) + coy) + "px";
            o += "left:" + (ob2 ? jpos * (14 - d) - sh * (37 - d * 8) + 60 - d * 15 : (sh - 1) * (98 - d * 7)) + "px'";

            if (sdd.charAt(0) == "#") {
                sft++;
                v2c = 0;
                while (sft < sdd.length) {
                    v2o = "";
                    v2v = (v2c ? 1 : 3) * ln[n] / 6;
                    switch (sdd.charAt(sft)) {
                    case "C":
                        v2s = 0;
                        v2p = 192;
                        v2t = 0;
                        if (!v2c)
                            v2o = sdd.charAt(++sft);
                        sft++;
                        break;
                    case "c":
                        v2s = 96;
                        v2p = 192;
                        v2t = 0;
                        if (!v2c)
                            v2o = sdd.charAt(++sft);
                        sft++;
                        break;
                    case "R":
                        v2s = 0;
                        v2p = 96;
                        v2t = 0;
                        if (!v2c)
                            v2o = sdd.charAt(++sft);
                        sft++;
                        break;
                    case "r":
                        v2s = 48;
                        v2p = 96;
                        v2t = 0;
                        if (!v2c)
                            v2o = sdd.charAt(++sft);
                        sft++;
                        break;
                    case "P":
                        v2s = 0;
                        v2p = 48;
                        v2t = 0;
                        if (!v2c)
                            v2o = sdd.charAt(++sft);
                        sft++;
                        break;
                    case "p":
                        v2s = 24;
                        v2p = 48;
                        v2t = 0;
                        if (!v2c)
                            v2o = sdd.charAt(++sft);
                        sft++;
                        break;

                    case "B":
                        v2s = 0;
                        v2p = 192;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "b":
                        v2s = 96;
                        v2p = 192;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "Q":
                        v2s = 0;
                        v2p = 96;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "q":
                        v2s = 48;
                        v2p = 96;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "O":
                        v2s = 0;
                        v2p = 48;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "o":
                        v2s = 24;
                        v2p = 48;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "X":
                        v2s = 0;
                        v2p = 24;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "x":
                        v2s = 12;
                        v2p = 24;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "Z":
                        v2s = 0;
                        v2p = 12;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;

                    case "S":
                        v2s = 0;
                        v2p = 64;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "s":
                        v2s = 32;
                        v2p = 64;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "T":
                        v2s = 0;
                        v2p = 32;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "t":
                        v2s = 16;
                        v2p = 32;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;
                    case "U":
                        v2s = 0;
                        v2p = 16;
                        v2t = 1;
                        v2b = Math.ceil(v2v / v2p) + 1;
                        v2o = sdd.substring(sft + 1, sft + v2b);
                        sft += v2b;
                        break;

                    case "1":
                    case "2":
                    case "3":
                    case "4":
                    case "5":
                    case "6":
                    case "7":
                        v2o = sdd.substring(sft, sft + 3);
                        v2t = 2;
                        sft += 3;
                        break;
                    case "9":
                        v2o = "1" + sdd.substring(sft + 2, sft + 4);
                    case "8":
                        for (i2 = 0; i2 < 6; i2++) {
                            if (b64.indexOf(sdd.charAt(sft + 1)) & (1 << i2))
                                v2o += (i2 + 2) + sdd.substring(sft + 2, sft + 4);
                        }
                        v2t = 2;
                        sft += 4;
                        break;

                    case "-":
                        v2c = 1;
                        sft++;
                        break;
                    case "_":
                        v2o = (sft == sdd.length - 1) ? "AA" : sdd.substring(sft + 1);
                        v2c = v2t = 2;
                        break;

                    default:
                        w("<font color=red>error<\/red>");
                        return;
                    }
                    if (sdd.charAt(sft - 1) == "-")
                        continue;

                    v2k = "";
                    if (v2t == 1) {
                        for (i2 = 0; i2 < v2o.length; i2++) {
                            if (v2c == 0) {
                                v2x = b64.indexOf(v2o.charAt(i2));
                                v2k += Math.floor(v2x / 8) + "" + v2x % 8;
                            } else if (v2c == 1) {
                                v2x = b64.indexOf(v2o.charAt(i2));
                                for (i3 = 5; i3 >= 0; i3--)
                                    v2k += (v2x >> i3) & 1 ? 1 : 0;
                            }
                        }
                    } else if (v2t == 0) {
                        for (i2 = v2s; i2 < ln[n]; i2 += v2p)
                            v2k += (v2c ? "1" : v2o);
                    }
                    if (v2t != 2) {
                        for (v2i = 0, i2 = v2s; i2 < ln[n]; v2i++, i2 += v2p) {
                            if (hids && v2c)
                                continue;
                            if ((ob2 = v2k.charAt(v2i)) != 0) {
                                if (alls && key == 14) {
                                    for (dpalli = 0; dpalli < 8; dpalli++) {
                                        ob2 = dpalls[h - 1][dpalli];
                                        if (!(objtab[i2] & (1 << ob2)))
                                            break;
                                    }
                                } else if (v2c && !alls) {
                                    ob2 = 0;
                                    if (conum == 0)
                                        co[0] = ((Math.floor(i2 / 6 / mnbase) % mnloop) == mn) ? "r" : "s";
                                } else if (sran) {
                                    if (alls)
                                        ob2 = 0;
                                    else if (ob2)
                                        ob2 = Math.floor(Math.random() * 7) + 1;
                                    srancnt = 0;
                                    while (objtab[i2] & (1 << ob2)) {
                                        if (++srancnt >= 10000) {
                                            alert("S-RAN生成失敗により強制終了");
                                            break;
                                        }
                                        ob2 = Math.floor(Math.random() * 7) + 1;
                                    }
                                }
                                if (h == 1 && stat_on == 0)
                                    p1o++;
                                objtab[i2] |= (1 << ob2);
                                jpos = obr[h - 1][ob2];
                                if (jpos == 8)
                                    continue;
                                if (stat_on == 0) {
                                    kc[h - 1][jpos]++;
                                    npos.push((n + gap) * 10000000 + (Math.floor(i2 * hs / 3) + nmergin[n + gap]) * 100 + (h * 10 + jpos));
                                }
                                // obj!
                                stat_insert(h - 1, ob2, stat_pos + i2, 0);
                                objstr = imgdir + co[jpos] + dstr;
                                ttl++;
                                o += "<img src=" + objstr + ".gif" + msc + " name=ttl" + ttl +
                                " onMousedown=dragOn('ttl" + ttl + "') style='top:" +
                                (nbar * hs - Math.floor(i2 * hs / 3) + coy) + "px;left:" +
                                (ob2 ? jpos * (14 - d) - sh * (37 - d * 8) + 60 - d * 15
                                : (sh - 1) * (98 - d * 7)) + "px'>";
                            }
                        }
                    } else {
                        for (i2 = 0; i2 < v2o.length; i2 += 2) {

                            if (v2c == 0) {
                                ob2 = v2o.charAt(i2);
                                i2++;
                            } else
                                ob2 = 0;
                            if (hids && ob2 == 0)
                                continue;
                            v2h = b64.indexOf(v2o.charAt(i2)) * 64 + b64.indexOf(v2o.charAt(i2 + 1)) * 1;
                            if (alls && key == 14) {
                                for (dpalli = 0; dpalli < 8; dpalli++) {
                                    ob2 = dpalls[h - 1][dpalli];
                                    if (!(objtab[v2h] & (1 << ob2)))
                                        break;
                                }
                            } else if (mn != void (0) && !alls) {
                                if (conum == 0)
                                    co[0] = ((Math.floor(v2h / 6 / mnbase) % mnloop) == mn) ? "r" : "s";
                            } else if (sran) {
                                if (alls)
                                    ob2 = 0;
                                else if (ob2)
                                    ob2 = Math.floor(Math.random() * 7) + 1;
                                srancnt = 0;
                                while (objtab[v2h] & (1 << ob2)) {
                                    if (++srancnt >= 10000) {
                                        alert("S-RAN生成失敗により強制終了");
                                        break;
                                    }
                                    ob2 = Math.floor(Math.random() * 7) + 1;
                                }
                            }
                            if (h == 1 && stat_on == 0)
                                p1o++;
                            objtab[v2h] |= (1 << ob2);
                            jpos = obr[h - 1][ob2];
                            if (jpos == 8)
                                continue;
                            if (stat_on == 0) {
                                kc[h - 1][jpos]++;
                                npos.push((n + gap) * 10000000 + (Math.floor(v2h * hs / 3) + nmergin[n + gap]) * 100 + (h * 10 + jpos));
                            }
                            // obj!
                            stat_insert(h - 1, ob2, stat_pos + v2h, 0);
                            objstr = imgdir + co[jpos] + dstr;
                            ttl++;
                            o += "<img src=" + objstr + ".gif" + msc + " name=ttl" + ttl +
                            " onMousedown=dragOn('ttl" + ttl + "')  style='top:" +
                            (nbar * hs - Math.floor(v2h * hs / 3) + coy) + "px;left:" +
                            (ob2 ? jpos * (14 - d) - sh * (37 - d * 8) + 60 - d * 15
                            : (sh - 1) * (98 - d * 7)) + "px'>";
                        }
                    }
                    if (v2c == 2)
                        break;
                }
            } else {
                if (sdd.charAt(0) == "x") {
                    len = parseInt(sdd.substring(1, 4), 16);
                    sft = 4;
                } else
                    len = sdd.length;
                for (; sft < sdd.length; sft += 2, div += 2) {
                    while (sdd.charAt(sft) == "@") {
                        div += parseInt(sd[h + mm][n].substring(sft + 1, sft + 3), 16) * 2;
                        sft += 3;
                    }
                    if (mn != void (0) && conum == 0)
                        co[0] = ((Math.floor(nbar * div / (len * 2 * mnbase)) % mnloop) == mn) ? "r" : "s";
                    y = parseInt(sdd.substring(sft, sft + 2), 16);
                    for (j = 0; j <= ky; j++) {
                        if (y >> j == 0)
                            break;
                        if (hids && j == 0)
                            continue;
                        if (y >> j & 1) {
                            if (h == 1 && stat_on == 0)
                                p1o++;
                            jpos = obr[h - 1][j];
                            if (jpos == 8)
                                continue;
                            if (alls && key == 14) {
                                for (dpalli = 0; dpalli < 8; dpalli++) {
                                    jpos = dpalls[h - 1][dpalli];
                                    if (!(objtab[Math.floor(nbar * div * 3 / len)] & (1 << jpos)))
                                        break;
                                }
                            } else if (sran) {
                                if (alls)
                                    jpos = 0;
                                else if (jpos)
                                    jpos = Math.floor(Math.random() * 7) + 1;
                                srancnt = 0;
                                while (objtab[Math.floor(nbar * div * 3 / len)] & (1 << jpos)) {
                                    if (++srancnt >= 10000) {
                                        alert("S-RAN生成失敗により強制終了");
                                        break;
                                    }
                                    jpos = Math.floor(Math.random() * 7) + 1;
                                }
                            }
                            if (stat_on == 0) {
                                kc[h - 1][jpos]++;
                                npos.push((n + gap) * 10000000 + (Math.floor(nbar * div * hs / len) + nmergin[n + gap]) * 100 + (h * 10 + jpos));
                            }
                            objtab[Math.floor(nbar * div * 3 / len)] |= (1 << jpos);
                            // obj!
                            stat_insert(h - 1, jpos, stat_pos + nbar * div * 3 / len, 0);
                            objstr = imgdir + co[jpos] + dstr;
                            ttl++;
                            o += "<img src=" + objstr + ".gif" + msc + " name=ttl" + ttl +
                            " onMousedown=dragOn('ttl" + ttl + "') style='top:" +
                            (nbar * hs - Math.floor(nbar * div * hs / len) + coy) + "px;left:" +
                            (jpos ? jpos * (14 - d) - sh * (37 - d * 8) + 60 - d * 15 : (sh - 1) * (98 - d * 7)) + "px'>";
                        }
                    }
                }
            }
        }
        objres[h][1] = objtab[0];

    }
}
