"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const data = [
      {
        name: "Azithromycin 100",
        ingredient: "Azithromycin 100mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P02821_1_l.webp",
        description:
          "Azithromycin được chỉ định dùng trong các trường hợp nhiễm khuẩn do các vi khuẩn nhạy cảm với thuốc như nhiễm khuẩn đường hô hấp dưới bao gồm viêm phế quản, viêm phổi, các nhiễm khuẩn da và mô mềm, viêm tai giữa; nhiễm khuẩn đường hô hấp trên như viêm xoang, viêm họng, viêm amidan. Azithromycin được dùng điều trị nhiễm khuẩn đường sinh dục chưa biến chứng do Chlamydia trachomatis hoặc Neisseria gonorrhoeae không đa kháng.",
        price: 20000,
        categoryId: 1,
      },
      {
        name: "Clarithromycin",
        ingredient: "Clarithromycin 250 mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00500_1_l.webp",
        description:
          "Clarithromycin được chỉ định cho người lớn và trẻ em trên 12 tuổi.Clarithromycin được chỉ định điều trị trong các trường hợp nhiễm trùng do các vi khuẩn nhạy cảm như: Nhiễm trùng đường hô hấp dưới như viêm phế quản cấp tính, mạn tính và viêm phổi. Nhiễm trùng đường hô hấp trên như viêm xoang, viêm họng.",
        price: 25000,
        categoryId: 1,
      },
      {
        name: "Klamentin",
        ingredient: "Amoxicilin 250mg, acid clavulanic 31,25mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P02493_1_l.webp",
        description:
          "Điều trị ngắn hạn các nhiễm khuẩn đường hô hấp trên và dưới, đường tiết niệu, da và mô mềm, xương và khớp. Klamentin có tính diệt khuẩn đối với nhiều loại vi khuẩn kể cả các dòng tiết beta - lactamase đề kháng với ampicilin và amoxicilin.",
        price: 30000,
        categoryId: 1,
      },
      {
        name: "Lincomycin",
        ingredient: "Lincomycin hydroclorid 500mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00978_1_l.webp",
        description:
          "Nhiễm khuẩn nặng do các vi khuẩn nhạy cảm: Tai, mũi, họng, Bệnh phổi – phế quản, Nha khoa, Da, Bộ phận sinh dọc, Xương khớp, Hậu phẫu vùng bụng, Nhiễm khuẩn huyết",
        price: 30000,
        categoryId: 1,
      },
      {
        name: "Amlodipin",
        ingredient: "Amlodipin 5mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P02276_1_l.webp",
        description:
          "Điều trị tăng huyết áp (ở người bệnh có những biến chứng chuyển hóa như đái tháo đường) và điều trị dự phòng ở người bệnh đau thắt ngực ổn định.",
        price: 40000,
        categoryId: 2,
      },
      {
        name: "Atorvastatin",
        ingredient: "Atorvastatin 10mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P16725_1_l.webp",
        description:
          "Điều trị tăng cholesterol huyết (hay nói cách khác là làm giảm cholesterol: Hỗ trợ cho chế độ ăn uống để làm giảm tăng cholesterol toàn phần, LDL – cholesterol, apolipoprotein B và triglycorid ở người lớn, thanh thiếu niên và trẻ em từ 10 tuổi trở lên. Giảm tăng cholesterol huyết nguyên phát bao gồm. Tăng cholesterol huyết di truyền (biến thể dị hợp). Tăng lipid huyết kết hợp (tương ứng với loại IIa và Iib của phân loại Fredrickson) khi không đáp ứng đầy đủ với chế độ ăn uống và các biện pháp điều trị không dùng thuốc khác.",
        price: 35000,
        categoryId: 2,
      },
      {
        name: "Coveram",
        ingredient: "Perindopril arginine 10mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P12048_1_l.webp",
        description:
          "Được dùng điều trị thay thế trong tăng huyết áp vô căn và/hoặc bệnh dạng mạch vành ổn định, ở bệnh nhân đã được kiểm soát đồng thời bằng perindopril và amlodipine ở hàm lượng tương tự.",
        price: 30000,
        categoryId: 2,
      },
      {
        name: "Indopril",
        ingredient: "Imidapril 5mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P14688_1_l.webp",
        description: "Tăng HA, Tăng HA nhu mô thận.",
        price: 20000,
        categoryId: 2,
      },
      {
        name: "Nexium Mups",
        ingredient: "Esomeprazole 40mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00214_1_l.webp",
        description:
          "Điều trị bệnh trào ngược dạ dày - thực quản (GERD), kết hợp với một phác đồ kháng khuẩn thích hợp để diệt trừ Helicobacter pylori và bệnh nhân cần điều trị bằng thuốc kháng viêm không steroid (NSAID) liên tục. Điều trị kéo dài sau khi đã điều trị phòng ngừa tái xuất huyết do loét dạ dày tá tràng bằng đường tĩnh mạch, Điều trị hội chứng Zollinger Ellison.",
        price: 50000,
        categoryId: 3,
      },
      {
        name: "Cimetidin",
        ingredient: "Cimetidin 400mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P01289_1_l.webp",
        description:
          "Điều trị ngắn hạn các bệnh loét dạ dày - tá tràng, các chứng trào ngược dạ dày - thực quản gây loét, các trạng thái bệnh lí tăng tiết dịch vị như hội chứng Zollinger-Ellison, bệnh đau tuyến nội tiết. Điều trị chảy máu loét dạ dày, tá tràng. Bệnh nhân hít phải dịch dạ dày sau khi hôn mê sâu hoặc trong khi chuyển dạ. giảm sự kém hấp thu và mất nước ở bệnh nhân bị hội chứng ruột, giảm bớt sự phân hủy của chế phẩm bổ sung Enzym ở bệnh nhân suy tụy.",
        price: 20000,
        categoryId: 3,
      },
      {
        name: "Hidrasec",
        ingredient: "Racecadotril 10mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P01685_1_l.webp",
        description:
          "Hidrasec Infants được chỉ định bổ sung, điều trị triệu chứng tiêu chảy cấp ở trẻ nhỏ (trên 3 tháng tuổi) và trẻ em cùng với việc bù nước bằng đường uống. Trong trường hợp điều trị được nguyên nhân gây tiêu chảy, có thể sử dụng racecadotril như một liệu pháp điều trị bổ sung.",
        price: 30000,
        categoryId: 3,
      },
      {
        name: "No-Spa",
        ingredient: "Drotaverine hydroclorid 40mg",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00457_1_l.webp",
        description:
          "Drotaverine là thuốc điều trị chứng co thắt có nguồn gốc từ cơ trơn. Cơn đau quặn mật do co thắt cơ trơn có liên quan đến những bệnh của đường mật: do sỏi túi mật, sỏi ống mật, viêm túi mật, viêm quanh túi mật, viêm đường mật và viêm bóng tụy. Cơn đau quặn thận do co thắt cơ trơn trong những bệnh của đường tiết niệu: do sỏi thận, sỏi niệu quản, viêm bể thận, viêm bàng quang và co thắt bàng quang. Dùng điều trị hỗ trợ trong: Đau bụng hay cơn đau quặn bụng do co thắt cơ trơn đường tiêu hoá: co thắt trong loét dạ dày-tá tràng, viêm dạ dày, co thắt tâm vị và môn vị, viêm ruột non và viêm đại tràng, co thắt đại tràng với táo bón và các dạng chướng bụng do hội chứng đại tràng bị kích thích. Drotaverine cải thiện nhanh và hiệu quả các triệu chứng đau bụng do co thắt nhưng không làm che lấp các dấu hiệu bụng ngoại khoa. Các bệnh phụ khoa: đau bụng kin",
        price: 30000,
        categoryId: 3,
      },
      {
        name: "Efferalgan",
        ingredient: "Paracetamol",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00014_1_l.webp",
        description:
          "Điều trị các chứng đau hoặc sốt như đau đầu, các tình trạng như cúm, đau răng, nhức mỏi cơ.",
        price: 10000,
        categoryId: 4,
      },
      {
        name: "Eugica",
        ingredient: "Núc nác 2g, húng chanh 42.5g, viễn chí 0.3g",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00746_1_l.webp",
        description:
          "Dùng điều trị các trường hợp: ho có đờm, ho mất tiếng, ho kinh niên, viêm đau họng, viêm khí quản, phế quản, sổ mũi. Làm loãng dịch nhầy đường hô hấp, long đờm.",
        price: 40000,
        categoryId: 4,
      },
      {
        name: "Prospan",
        ingredient: "Cao khô lá thường xuân",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P00296_1_l.webp",
        description:
          "Điều trị viêm đường hô hấp cấp có kèm ho. Dùng để điều trị triệu chứng trong các bệnh lý viêm phế quản mãn tính.",
        price: 50000,
        categoryId: 4,
      },
      {
        name: "Systane",
        ingredient: "Dung dịch nhỏ mắt vô trùng",
        imagepath:
          "https://data-service.pharmacity.io/pmc-upload-media/productionvn/pmc-ecm-core/products/P13312_1_l.webp",
        description:
          "Dung dịch nhỏ mắt vô trùng không chất bảo quản liều đơn có thể sử dụng khi cần thiết cả ngày. Thuốc có thể sử dụng để điều trị mắt khô kết hợp việc sử dụng kính áp tròng bằng cách nhỏ thuốc trước khi đeo kính áp tròng, và sau khi tháo kính áp tròng.",
        price: 60000,
        categoryId: 4,
      },
    ];
    data.map((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    });
    await queryInterface.bulkInsert("Products", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
