// --- IMPORT ASSETS ---
// Common Fallback Image
import imgChung from '../assets/MILKTEA/CHUNG.svg';

// Coffee & Matcha
import imgBacXiu from '../assets/COFFE & MATCHA/BẠCXĨU.svg';
import imgColdWhisk from '../assets/COFFE & MATCHA/COLDWHISK.svg';
import imgCaPheMuoi from '../assets/COFFE & MATCHA/CÀPHÊMUỐI.svg';
import imgCaPheDen from '../assets/COFFE & MATCHA/CÀPHÊĐEN.svg';
import imgCaPheSua from '../assets/COFFE & MATCHA/CÀPHÊSỮA.svg';
import imgCaPheSuaTuoiSuongSao from '../assets/COFFE & MATCHA/CÀPHÊSỮATƯƠISƯƠNGSÁO.svg';
import imgMatchaCoco from '../assets/COFFE & MATCHA/MATCHACOCO.svg';
import imgMatchaDau from '../assets/COFFE & MATCHA/MATCHADÂU.svg';
import imgMatchaLatte from '../assets/COFFE & MATCHA/MATCHALATTE.svg';
import imgMatchaXoai from '../assets/COFFE & MATCHA/MATCHAXOÀI.svg';

// Fruit Tea
import imgCamDaoBonMua from '../assets/FRUIT/CAMĐÀOBỐNMÙA.svg';
import imgLongNhanHuongHoa from '../assets/FRUIT/LONGNHÃNHƯƠNGHOA.svg';
import imgLuuDoNhaDam from '../assets/FRUIT/LỰUĐỎNHAĐAM.svg';
import imgTraBuoiHongMo from '../assets/FRUIT/TRÀBƯỞIHỒNGMƠ.svg';
import imgTraKimQuat from '../assets/FRUIT/TRÀKIMQUẤT.svg';
import imgTraLaiDacThom from '../assets/FRUIT/TRÀLÀIĐÁCTHƠM.svg';
import imgTraThaoMocRungThong from '../assets/FRUIT/TRÀTHẢOMỘCRỪNGTHÔNG.svg';
import imgTraVaiHuongHoa from '../assets/FRUIT/TRÀVẢIHƯƠNGHOA.svg';

// Milk Tea
import imgOlongLaiSuaTranChauTra from '../assets/MILKTEA/OLONGLÀISỮATRÂNCHÂUTRÀ.svg';
import imgTraSuaOlongSen from '../assets/MILKTEA/TRÀSỮAOLONGSEN.svg';

// Toppings
import imgBuoiMieng from '../assets/TOPPING/BuoiMieng.svg';
import imgCheeseBall from '../assets/TOPPING/CheeseBall.svg';
import imgDaoMieng from '../assets/TOPPING/DaoMieng.svg';
import imgHatDacRim from '../assets/TOPPING/HatDacRim.svg';
import imgHatSen from '../assets/TOPPING/HatSen.svg';
import imgNhaDam from '../assets/TOPPING/NhaDam.svg';
import imgThachPhoMai from '../assets/TOPPING/ThachPhoMai.svg';
import imgThachPhoMaiQueHoa from '../assets/TOPPING/ThachPhoMaiQueHoa.svg';
import imgThachQueHoa from '../assets/TOPPING/ThachQueHoa.svg';
import imgTraiNhan from '../assets/TOPPING/TraiNhan.svg';
import imgTraiVai from '../assets/TOPPING/TraiVai.svg';
import imgTranChauHoangKim from '../assets/TOPPING/TranChauHoangKim.svg';
import imgTranChauKhoaiMon from '../assets/TOPPING/TranChauKhoaiMon.svg';
import imgTranChauOlong from '../assets/TOPPING/TranChauOlong.svg';
import imgTranChauTra from '../assets/TOPPING/TranChauTra.svg';
import imgTranChauTrang from '../assets/TOPPING/TranChauTrang.svg';

export const PRODUCTS = [
  // --- FRUIT TEA ---
  {
    id: 'f1',
    category: 'FRUIT TEA',
    name: 'TRÀ KIM QUẤT',
    price: 39000,
    badge: 'HOT',
    description: 'Sự kết hợp hoàn hảo giữa trà hoa lài thanh mát và vị chua dịu thơm đặc trưng của kim quất tươi.',
    image: imgTraKimQuat
  },
  {
    id: 'f2',
    category: 'FRUIT TEA',
    name: 'TRÀ BƯỞI HỒNG MƠ',
    price: 45000,
    badge: 'NEW',
    description: 'Hương vị nhiệt đới ngọt ngào từ bưởi hồng chín mọng hòa quyện cùng vị thanh tao của trà hảo hạng.',
    image: imgTraBuoiHongMo
  },
  {
    id: 'f3',
    category: 'FRUIT TEA',
    name: 'LONG NHÃN HƯƠNG HOA',
    price: 45000,
    badge: '',
    description: 'Vị ngọt thanh dịu từ long nhãn quyện cùng hương thơm dịu ngọt của hoa lài tự nhiên.',
    image: imgLongNhanHuongHoa
  },
  {
    id: 'f4',
    category: 'FRUIT TEA',
    name: 'TRÀ THẢO MỘC RỪNG THÔNG',
    price: 42000,
    badge: '',
    description: 'Trà thảo mộc thanh mát mang hương vị thiên nhiên giúp thư giãn và thanh lọc cơ thể.',
    image: imgTraThaoMocRungThong
  },
  {
    id: 'f5',
    category: 'FRUIT TEA',
    name: 'TRÀ LÀI ĐÁC THƠM',
    price: 42000,
    badge: 'BEST',
    description: 'Trà nhài thơm ngát kết hợp cùng hạt đác giòn sần sật và mứt thơm ngọt dịu.',
    image: imgTraLaiDacThom
  },
  {
    id: 'f6',
    category: 'FRUIT TEA',
    name: 'TRÀ VẢI HƯƠNG HOA',
    price: 39000,
    badge: '',
    description: 'Trà thanh nhẹ quyện vị ngọt ngào thơm lừng từ trái vải tươi ngon căng mọng.',
    image: imgTraVaiHuongHoa
  },
  {
    id: 'f7',
    category: 'FRUIT TEA',
    name: 'CAM ĐÀO BỐN MÙA',
    price: 42000,
    badge: 'HOT',
    description: 'Hương vị cam đào kinh điển thơm lừng, chua ngọt tươi mát sảng khoái suốt bốn mùa.',
    image: imgCamDaoBonMua
  },
  {
    id: 'f8',
    category: 'FRUIT TEA',
    name: 'TRÀ CHERRY RỪNG',
    price: 45000,
    badge: '',
    description: 'Vị chua ngọt kích thích vị giác cực đỉnh từ trái cherry rừng chín mọng trên nền trà thanh khiết.',
    image: imgChung
  },
  {
    id: 'f9',
    category: 'FRUIT TEA',
    name: 'TRÀ DÂU THUNG LŨNG',
    price: 42000,
    badge: '',
    description: 'Dâu tây thơm ngọt thanh mát mang đậm hương vị tươi mới của vùng thung lũng xanh tươi.',
    image: imgChung
  },
  {
    id: 'f10',
    category: 'FRUIT TEA',
    name: 'LỰU ĐỎ NHA ĐAM',
    price: 45000,
    badge: 'NEW',
    description: 'Trà hạt lựu đỏ ngọt ngào giàu vitamin kết hợp thạch nha đam giòn ngọt sảng khoái.',
    image: imgLuuDoNhaDam
  },

  // --- MILK TEA ---
  {
    id: 'm1',
    category: 'MILK TEA',
    name: 'TRÀ SỮA UMAI',
    price: 35000,
    badge: 'BEST',
    description: 'Hương vị trà sữa truyền thống đậm đà chuẩn vị Umai, béo ngậy ngọt ngào cuốn hút khó cưỡng.',
    image: imgChung
  },
  {
    id: 'm2',
    category: 'MILK TEA',
    name: 'TRÀ SỮA NGUYÊN LÁ',
    price: 38000,
    badge: 'HOT',
    description: 'Trà sữa nấu từ hồng trà nguyên lá tuyển chọn, đậm vị trà thơm kéo dài béo nhẹ dễ chịu.',
    image: imgChung
  },
  {
    id: 'm3',
    category: 'MILK TEA',
    name: 'TRÀ SỮA OLONG',
    price: 38000,
    badge: '',
    description: 'Trà oolong nướng đậm vị, hòa quyện sữa béo thơm tạo nên hậu vị chát ngọt sâu lắng.',
    image: imgChung
  },
  {
    id: 'm4',
    category: 'MILK TEA',
    name: 'TRÀ SỮA OLONG SEN',
    price: 42000,
    badge: 'NEW',
    description: 'Sự kết hợp độc đáo giữa trà sữa oolong đậm vị và hạt sen bùi béo dẻo ngọt thanh tao.',
    image: imgTraSuaOlongSen
  },
  {
    id: 'm5',
    category: 'MILK TEA',
    name: 'OLONG LÀI SỮA (TC TRÀ)',
    price: 45000,
    badge: 'BEST',
    description: 'Trà sữa oolong lài thơm ngát đặc trưng kết hợp cùng trân châu trà dai giòn sần sật.',
    image: imgOlongLaiSuaTranChauTra
  },
  {
    id: 'm6',
    category: 'MILK TEA',
    name: 'OLONG SỮA QUẾ HOA',
    price: 42000,
    badge: '',
    description: 'Hương thơm ngọt dịu nồng nàn của hoa quế hòa quyện ăn ý cùng vị sữa ô long ngậy béo.',
    image: imgChung
  },
  {
    id: 'm7',
    category: 'MILK TEA',
    name: 'OLONG LÀI SỮA HẠNH NHÂN',
    price: 45000,
    badge: '',
    description: 'Vị thơm ngậy đặc trưng của hạnh nhân hòa quyện trên nền trà oolong lài sữa trứ danh.',
    image: imgChung
  },
  {
    id: 'm8',
    category: 'MILK TEA',
    name: 'OLONG SỮA DÀNH DÀNH',
    price: 42000,
    badge: '',
    description: 'Hương thơm mộc mạc thanh nhã từ hoa dành dành kết hợp vị trà sữa oolong béo nhẹ ngọt thanh.',
    image: imgChung
  },
  {
    id: 'm9',
    category: 'MILK TEA',
    name: 'LỤC TRÀ LÀI SỮA',
    price: 38000,
    badge: '',
    description: 'Lục trà nhài thơm mát thanh khiết quyện cùng sữa béo thơm dịu mát lạnh sảng khoái.',
    image: imgChung
  },
  {
    id: 'm10',
    category: 'MILK TEA',
    name: 'LỤC SỮA GẠO RANG',
    price: 40000,
    badge: '',
    description: 'Trà xanh sữa kết hợp hương thơm ngào ngạt của gạo rang bùi béo tự nhiên.',
    image: imgChung
  },
  {
    id: 'm11',
    category: 'MILK TEA',
    name: 'LỤC TRÀ THĂNG HOA',
    price: 42000,
    badge: 'NEW',
    description: 'Hương vị trà sữa nâng tầm với sự thăng hoa của các loại hoa lài và sữa hảo hạng.',
    image: imgChung
  },

  // --- MATCHA ---
  {
    id: 'mat1',
    category: 'MATCHA',
    name: 'Matcha Latte',
    price: 45000,
    badge: 'BEST',
    description: 'Matcha Uji Nhật Bản đậm vị ngậy, đắng nhẹ tinh tế quyện cùng sữa tươi béo thơm dồi dào.',
    image: imgMatchaLatte
  },
  {
    id: 'mat2',
    category: 'MATCHA',
    name: 'Matcha Xoài',
    price: 48000,
    badge: 'NEW',
    description: 'Sự phá cách độc đáo giữa lớp matcha đắng thanh mát và mứt xoài chín ngọt lịm thơm nồng.',
    image: imgMatchaXoai
  },
  {
    id: 'mat3',
    category: 'MATCHA',
    name: 'Matcha Dâu',
    price: 48000,
    badge: 'HOT',
    description: 'Bộ đôi hoàn hảo giữa vị thơm đắng của matcha và sốt dâu tây ngọt ngào, chua nhẹ trẻ trung.',
    image: imgMatchaDau
  },
  {
    id: 'mat4',
    category: 'MATCHA',
    name: 'Matcha CoCo',
    price: 48000,
    badge: '',
    description: 'Hương vị béo ngậy đặc trưng từ nước cốt dừa thơm phức hòa quyện tuyệt hảo cùng bột matcha Nhật.',
    image: imgMatchaCoco
  },
  {
    id: 'mat5',
    category: 'MATCHA',
    name: 'ColdWhisk',
    price: 45000,
    badge: '',
    description: 'Matcha được đánh bọt thủ công kỹ lưỡng giữ trọn hương vị nguyên bản thanh khiết sảng khoái.',
    image: imgColdWhisk
  },

  // --- COFFEE ---
  {
    id: 'co1',
    category: 'COFFEE',
    name: 'Cà phê Muối',
    price: 35000,
    badge: 'BEST',
    description: 'Cà phê phin truyền thống thơm nồng kết hợp cùng lớp kem muối béo mặn đậm đà hấp dẫn.',
    image: imgCaPheMuoi
  },
  {
    id: 'co2',
    category: 'COFFEE',
    name: 'Cà phê sữa',
    price: 29000,
    badge: '',
    description: 'Vị đắng đượm của cà phê phin quyện cùng vị ngọt béo ngậy truyền thống của sữa đặc.',
    image: imgCaPheSua
  },
  {
    id: 'co3',
    category: 'COFFEE',
    name: 'Bạc xĩu',
    price: 32000,
    badge: 'HOT',
    description: 'Sự kết hợp hoàn hảo của nhiều sữa tươi thơm béo và một chút cà phê phin đậm đà thơm ngát.',
    image: imgBacXiu
  },
  {
    id: 'co4',
    category: 'COFFEE',
    name: 'Cà phê Đen',
    price: 25000,
    badge: '',
    description: 'Cà phê đen nguyên chất mạnh mẽ đậm đà vị đắng tự nhiên, đánh thức mọi giác quan tỉnh táo.',
    image: imgCaPheDen
  },
  {
    id: 'co5',
    category: 'COFFEE',
    name: 'Cà phê Sữa tươi sương sáo',
    price: 35000,
    badge: 'NEW',
    description: 'Cà phê sữa tươi thơm ngậy kết hợp cùng thạch sương sáo thanh mát nhai vui miệng.',
    image: imgCaPheSuaTuoiSuongSao
  },

  // --- TOPPING ---
  {
    id: 't_white_pearl',
    category: 'TOPPING',
    name: 'Trân Châu Trắng',
    price: 7000,
    badge: 'BEST',
    description: 'Trân châu trắng giòn sần sật, ngọt nhẹ thanh mát.',
    image: imgTranChauTrang
  },
  {
    id: 't_gold_pearl',
    category: 'TOPPING',
    name: 'Trân Châu Hoàng Kim',
    price: 7000,
    badge: '',
    description: 'Trân châu hoàng kim dẻo mềm, thơm lừng vị đường đen.',
    image: imgTranChauHoangKim
  },
  {
    id: 't_taro_pearl',
    category: 'TOPPING',
    name: 'Trân Châu Khoai Môn',
    price: 8000,
    badge: 'NEW',
    description: 'Trân châu làm từ khoai môn tự nhiên thơm bùi đặc trưng.',
    image: imgTranChauKhoaiMon
  },
  {
    id: 't_olong_pearl',
    category: 'TOPPING',
    name: 'Trân Châu Ô Long',
    price: 8000,
    badge: '',
    description: 'Trân châu đậm vị trà ô long, thơm nhẹ hậu vị.',
    image: imgTranChauOlong
  },
  {
    id: 't_tea_pearl',
    category: 'TOPPING',
    name: 'Trân Châu Trà',
    price: 7000,
    badge: '',
    description: 'Trân châu dai giòn đậm đà hương vị trà xanh tươi mát.',
    image: imgTranChauTra
  },
  {
    id: 't_cheese_jelly',
    category: 'TOPPING',
    name: 'Thạch Phô Mai',
    price: 9000,
    badge: 'BEST',
    description: 'Thạch rau câu giòn ngọt bọc viên nhân phô mai béo ngậy bên trong.',
    image: imgThachPhoMai
  },
  {
    id: 't_osmanthus_cheese_jelly',
    category: 'TOPPING',
    name: 'Thạch Phô Mai Quế Hoa',
    price: 10000,
    badge: 'NEW',
    description: 'Sự kết hợp tinh tế giữa quế hoa thơm ngát và nhân phô mai béo ngậy.',
    image: imgThachPhoMaiQueHoa
  },
  {
    id: 't_osmanthus_jelly',
    category: 'TOPPING',
    name: 'Thạch Quế Hoa',
    price: 8000,
    badge: '',
    description: 'Thạch làm từ hoa mộc tê (quế hoa) thơm ngọt tự nhiên thanh lọc.',
    image: imgThachQueHoa
  },
  {
    id: 't_cheese_ball',
    category: 'TOPPING',
    name: 'Cheese Ball',
    price: 10000,
    badge: 'HOT',
    description: 'Viên phô mai tròn mềm béo ngậy, tan chảy ngay trong miệng.',
    image: imgCheeseBall
  },
  {
    id: 't_aloe_vera',
    category: 'TOPPING',
    name: 'Nha Đam',
    price: 7000,
    badge: '',
    description: 'Nha đam cắt hạt lựu giòn ngọt, giàu vitamin tốt cho sức khỏe.',
    image: imgNhaDam
  },
  {
    id: 't_sweet_palm_seed',
    category: 'TOPPING',
    name: 'Hạt Đác Rim',
    price: 8000,
    badge: '',
    description: 'Hạt đác tự nhiên rim đường phèn giòn sần sật ngọt dịu.',
    image: imgHatDacRim
  },
  {
    id: 't_lotus_seed',
    category: 'TOPPING',
    name: 'Hạt Sen',
    price: 9000,
    badge: '',
    description: 'Hạt sen tươi ninh nhừ bùi béo, thơm mát bổ dưỡng.',
    image: imgHatSen
  },
  {
    id: 't_peach_slice',
    category: 'TOPPING',
    name: 'Đào Miếng',
    price: 9000,
    badge: '',
    description: 'Đào ngâm giòn ngọt, vàng ruộm mọng nước.',
    image: imgDaoMieng
  },
  {
    id: 't_grapefruit_slice',
    category: 'TOPPING',
    name: 'Bưởi Miếng',
    price: 8000,
    badge: '',
    description: 'Múi bưởi hồng tươi chín mọng vị chua ngọt thanh mát.',
    image: imgBuoiMieng
  },
  {
    id: 't_longan',
    category: 'TOPPING',
    name: 'Trái Nhãn',
    price: 9000,
    badge: '',
    description: 'Cơm nhãn xuồng dày, ngọt lịm mọng nước.',
    image: imgTraiNhan
  },
  {
    id: 't_lychee',
    category: 'TOPPING',
    name: 'Trái Vải',
    price: 9000,
    badge: '',
    description: 'Trái vải thiều chín mọng thơm nức ngọt ngào.',
    image: imgTraiVai
  }
];
