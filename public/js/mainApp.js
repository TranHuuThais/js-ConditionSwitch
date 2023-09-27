function kimtrasonguyen(num) {
    switch (Math.sign(num)) {
        case 0:
            document.writeln('la so khong' + '<br>')
            break;
        case 1:
            document.writeln('la so nguyen duong' + '<br>')
            break;
        case -1:
            document.writeln('la so nguyen am' + '<br>')
            break;
        default:
            document.writeln('so khongphai nguyen duong hay am' + '<br>')
    }
}
let so = Number(prompt('nhap mot so'))
kimtrasonguyen(so)
/*bai  10.2*/
function songuyen(n) {
    switch (true) {
        case (n % 3 === 0 && n % 5 === 0):
            document.writeln('chia het cho 3 va chia het cho 5' + '<br>')
            break;
        case (n % 3 === 0):
            document.writeln('chia het cho 3' + '<br>')
            break;
        case (n % 5 === 0):
            document.writeln('chia het cho 5' + '<br>')
            break;

        default:
            document.writeln('khong chia het cho 3 va 5' + '<br>')

    }
}
let kt = parseInt(prompt('nhao mot so can kiem tra'))
songuyen(kt)
/*bai 10_3 */
function kiemtrathang(thang) {
    switch (true) {
        case (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12):
            document.writeln('thang co 31 ngay' + '<br>')
            break;
        case (thang === 3 || thang === 4 || thang === 6 || thang === 9 || thang === 11):
            document.writeln('thang co 30 ngay' + '<br>')
            break;
        case (thang === 2):
            document.writeln('thang co 28 hoac 29 ngay tuy theo nam nhuan' + '<br>')
            break;
        default:
            document.writeln('thang khong ton tai' + '<br>')
    }
}
let ktthang = parseInt(prompt('nhap vao thang'))
kiemtrathang(ktthang)
/*bai 10_4*/
function giaiphuongtrinh(a, b, c) {
    let delta = b * b - 4 * a * c;

    switch (true) {
        case (delta > 0):
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.writeln('Phương trình có 2 nghiệm phân biệt:' + '<br>');
            document.writeln("x1 =", x1);
            document.writeln("x2 =", x2);
            break;
        case (delta === 0):
            let x = -b / (2 * a);
            document.writeln("Phương trình có nghiệm kép:" + '<br>');
            document.writeln("x =", x);
            break;
        default:
            document.writeln("Phương trình vô nghiệm" + '<br>');
    }
}

let a = parseFloat(prompt("Nhập hệ số a: "));
let b = parseFloat(prompt("Nhập hệ số b: "));
let c = parseFloat(prompt("Nhập hệ số c: "));

giaiphuongtrinh(a, b, c);
/*bai 10_5*/
var canha = Number(prompt('nhap vao canh a'))
var canhb = Number(prompt('nhap vao canh b'))
var canhc = Number(prompt('nhap vao canh c'))
switch (true) {
    case (canha + canhb > canhc && canhb + canhc > canha && canhc + canha > canhb):
        document.writeln('là 1 tam giác ' + '<br>')
        break;
    default:
        document.writeln('khong phải là 1 tam giác' + '<br>')
}
