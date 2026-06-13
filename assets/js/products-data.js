/* Dữ liệu sản phẩm dùng chung cho index.html & product-detail.html.
   Thêm sản phẩm thật bằng cách bổ sung vào mảng items/variants.
   Mỗi value có thể là chuỗi (dùng chung) hoặc {vi, en}. */
window.PD_DATA = {
        '1': {
            accent: '#2563eb',
            badge: { vi: 'Nhóm 1', en: 'Group 1' },
            title: { vi: 'Silicon Wafer & Substrate cho ngành bán dẫn', en: 'Silicon Wafer & Substrate for the Semiconductor Industry' },
            items: [
                {
                    name: { vi: 'Silicon wafer', en: 'Silicon wafer' },
                    variants: [
                        {
                            name: 'N-type Si', img: './assets/images/prod-g1.jpg',
                            desc: { vi: 'Wafer silicon pha tạp loại N (Phosphorus), điện trở suất ổn định.', en: 'N-doped silicon wafer (Phosphorus) with stable resistivity.' },
                            specs: [
                                { k: { vi: 'Đường kính', en: 'Diameter' }, v: '2"–12" (50–300 mm)' },
                                { k: { vi: 'Tạp chất', en: 'Dopant' }, v: 'Phosphorus (P)' },
                                { k: { vi: 'Định hướng', en: 'Orientation' }, v: '<100> / <111>' },
                                { k: { vi: 'Điện trở suất', en: 'Resistivity' }, v: '1–10 Ω·cm' },
                                { k: { vi: 'Độ dày', en: 'Thickness' }, v: '275–725 µm' },
                                { k: { vi: 'Bề mặt', en: 'Surface' }, v: { vi: 'Một mặt đánh bóng (SSP)', en: 'Single-side polished (SSP)' } }
                            ]
                        },
                        {
                            name: 'P-type Si', img: './assets/images/prod-g1.jpg',
                            desc: { vi: 'Wafer silicon pha tạp loại P (Boron).', en: 'P-doped silicon wafer (Boron).' },
                            specs: [
                                { k: { vi: 'Đường kính', en: 'Diameter' }, v: '2"–12" (50–300 mm)' },
                                { k: { vi: 'Tạp chất', en: 'Dopant' }, v: 'Boron (B)' },
                                { k: { vi: 'Định hướng', en: 'Orientation' }, v: '<100> / <111>' },
                                { k: { vi: 'Điện trở suất', en: 'Resistivity' }, v: '0.001–50 Ω·cm' },
                                { k: { vi: 'Độ dày', en: 'Thickness' }, v: '275–725 µm' },
                                { k: { vi: 'Bề mặt', en: 'Surface' }, v: 'SSP / DSP' }
                            ]
                        },
                        {
                            name: 'Double Polished Side', img: './assets/images/prod-g1.jpg',
                            desc: { vi: 'Wafer đánh bóng cả hai mặt cho ứng dụng MEMS / đặc biệt.', en: 'Double-side polished wafer for MEMS / special applications.' },
                            specs: [
                                { k: { vi: 'Bề mặt', en: 'Surface' }, v: { vi: 'Đánh bóng 2 mặt (DSP)', en: 'Double-side polished (DSP)' } },
                                { k: { vi: 'Đường kính', en: 'Diameter' }, v: '2"–8"' },
                                { k: { vi: 'Độ dày', en: 'Thickness' }, v: '100–525 µm' },
                                { k: 'TTV', v: '< 2 µm' },
                                { k: { vi: 'Loại', en: 'Type' }, v: 'N / P' }
                            ]
                        },
                        {
                            name: 'Etc...', img: './assets/images/prod-g1.jpg',
                            desc: { vi: 'Các loại wafer khác theo yêu cầu (SOI, Epitaxial...).', en: 'Other wafer types on request (SOI, Epitaxial...).' },
                            specs: []
                        }
                    ]
                },
                {
                    name: { vi: 'Sapphire & Glass substrate', en: 'Sapphire & Glass substrate' },
                    variants: [
                        {
                            name: { vi: 'Sapphire wafer', en: 'Sapphire wafer' }, img: './assets/images/prod-g1.jpg',
                            desc: { vi: 'Đế sapphire đơn tinh thể độ tinh khiết cao.', en: 'High-purity single-crystal sapphire substrate.' },
                            specs: [
                                { k: { vi: 'Vật liệu', en: 'Material' }, v: 'Al₂O₃ (99.99%)' },
                                { k: { vi: 'Định hướng', en: 'Orientation' }, v: 'C-plane (0001)' },
                                { k: { vi: 'Đường kính', en: 'Diameter' }, v: '2"–6"' },
                                { k: { vi: 'Độ dày', en: 'Thickness' }, v: '430–650 µm' }
                            ]
                        },
                        {
                            name: { vi: 'Quartz / Glass substrate', en: 'Quartz / Glass substrate' }, img: './assets/images/prod-g1.jpg',
                            desc: { vi: 'Đế thủy tinh / thạch anh cho quang học & cảm biến.', en: 'Glass / quartz substrate for optics & sensors.' },
                            specs: [
                                { k: { vi: 'Vật liệu', en: 'Material' }, v: { vi: 'Thạch anh nung chảy / Borosilicate', en: 'Fused silica / Borosilicate' } },
                                { k: { vi: 'Độ dày', en: 'Thickness' }, v: '0.3–2.0 mm' },
                                { k: { vi: 'Bề mặt', en: 'Surface' }, v: { vi: 'Đánh bóng quang học', en: 'Optical polish' } }
                            ]
                        }
                    ]
                }
            ]
        },
        '2': {
            accent: '#16a34a',
            badge: { vi: 'Nhóm 2', en: 'Group 2' },
            title: { vi: 'Vật liệu & thiết bị cho năng lượng tái tạo', en: 'Materials & Equipment for Renewable Energy' },
            items: [
                {
                    name: { vi: 'Bình phản ứng xúc tác chuyển hóa năng lượng', en: 'Reactors for catalytic energy conversion' },
                    variants: [
                        { name: { vi: 'Bình phản ứng xúc tác', en: 'Catalytic reactor' }, img: './assets/images/prod-g2.jpg', desc: { vi: 'Thiết bị phản ứng cho chuyển hóa năng lượng.', en: 'Reactor systems for energy conversion.' }, specs: [] }
                    ]
                },
                {
                    name: { vi: 'Bia phún xạ cho lắng đọng màng mỏng', en: 'Sputtering targets for thin film deposition' },
                    variants: [
                        {
                            name: { vi: 'Bia phún xạ kim loại', en: 'Metal sputtering target' }, img: './assets/images/prod-g2.jpg',
                            desc: { vi: 'Bia phún xạ cho lắng đọng màng mỏng PVD.', en: 'Sputtering targets for PVD thin-film deposition.' },
                            specs: [
                                { k: { vi: 'Vật liệu', en: 'Material' }, v: { vi: 'Theo yêu cầu', en: 'On request' } },
                                { k: { vi: 'Độ tinh khiết', en: 'Purity' }, v: '99.9% – 99.999%' }
                            ]
                        }
                    ]
                }
            ]
        },
        '3': {
            accent: '#0891b2',
            badge: { vi: 'Nhóm 3', en: 'Group 3' },
            title: { vi: 'Thiết bị phòng sạch & phòng thí nghiệm công nghệ cao', en: 'Cleanroom & Hi-Tech Laboratory Equipment' },
            items: [
                { name: { vi: 'Thiết bị gia nhiệt, hệ thống tổng hợp vật liệu nano', en: 'Heating equipment & nanomaterial synthesis systems' },
                  variants: [ { name: { vi: 'Hệ thống gia nhiệt / tổng hợp nano', en: 'Heating / nano-synthesis system' }, img: './assets/images/prod-g3.jpg', desc: { vi: '', en: '' }, specs: [] } ] },
                { name: { vi: 'Dụng cụ thủy tinh chuyên dụng cho phòng thí nghiệm', en: 'Specialized laboratory glassware' },
                  variants: [ { name: { vi: 'Dụng cụ thủy tinh thí nghiệm', en: 'Laboratory glassware' }, img: './assets/images/prod-g3.jpg', desc: { vi: '', en: '' }, specs: [] } ] },
                { name: { vi: 'Trang thiết bị phòng sạch (găng tay, bunny suit, face mask)', en: 'Cleanroom gear (gloves, bunny suits, face masks)' },
                  variants: [ { name: { vi: 'Trang bị phòng sạch', en: 'Cleanroom consumables' }, img: './assets/images/prod-g3.jpg', desc: { vi: 'Găng tay, bunny suit, face mask...', en: 'Gloves, bunny suits, face masks...' }, specs: [] } ] }
            ]
        },
        '4': {
            accent: '#9333ea',
            badge: { vi: 'Nhóm 4', en: 'Group 4' },
            title: { vi: 'Hóa chất & vật tư cho ngành công nghệ tiên tiến', en: 'Chemicals & Supplies for Advanced Technology' },
            items: [
                { name: { vi: 'Hóa chất tổng hợp vật liệu nano & bán dẫn', en: 'Chemicals for nano & semiconductor material synthesis' },
                  variants: [ { name: { vi: 'Hóa chất tổng hợp', en: 'Synthesis chemicals' }, img: './assets/images/prod-g4.jpg', desc: { vi: '', en: '' }, specs: [] } ] },
                { name: { vi: 'Hóa chất sản xuất chip (photoresist, polishing solutions, etchant)', en: 'Chip fabrication chemicals (photoresist, polishing solutions, etchant)' },
                  variants: [ { name: { vi: 'Hóa chất sản xuất chip', en: 'Fab chemicals' }, img: './assets/images/prod-g4.jpg', desc: { vi: 'Photoresist, polishing solutions, etchant...', en: 'Photoresist, polishing solutions, etchant...' }, specs: [] } ] }
            ]
        }
    };

    window.PD_STR = {
        crumb:   { vi: 'Sản phẩm', en: 'Products' },
        updating:{ vi: 'Thông số kỹ thuật & hình ảnh đang được cập nhật.', en: 'Specifications & images are being updated.' },
        quote:   { vi: 'Yêu cầu báo giá', en: 'Request a quote' },
        home:    { vi: 'Trang chủ', en: 'Home' },
        back:    { vi: 'Về trang chủ', en: 'Back to home' },
        allprod: { vi: 'Tất cả sản phẩm', en: 'All products' },
        intro:   { vi: 'Thông số kỹ thuật chi tiết cho từng sản phẩm. Liên hệ để nhận báo giá và tư vấn.', en: 'Detailed specifications for each product. Contact us for a quote and consultation.' },
        notfound:{ vi: 'Không tìm thấy nhóm sản phẩm.', en: 'Product group not found.' }
    };
