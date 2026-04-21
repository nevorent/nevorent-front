const mockMessages = [
    {
        id: "m1",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Bună ziua! Mai este disponibil apartamentul din Nufărul?",
        timestamp: "2024-03-02T10:00:00Z",
        status: "read",
        online: true
    },
    {
        id: "m2",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "Bună ziua! Da, este disponibil. Când ați dori să îl vedeți?",
        timestamp: "2024-03-02T10:05:00Z",
        status: "read",
        online: false
    },
    {
        id: "m3",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Aș putea veni mâine după ora 18:00? Lucrez până târziu.",
        timestamp: "2024-03-02T10:07:00Z",
        status: "read",
        online: true
    },
    {
        id: "m4",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "Mâine la 18:30 e perfect. Ne auzim la telefon înainte?",
        timestamp: "2024-03-02T10:15:00Z",
        status: "read",
        online: false
    },
    {
        id: "m5",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "Vă las aici numărul meu: 0722 000 000.",
        timestamp: "2024-03-02T10:15:30Z",
        status: "read",
        online: false
    },
    {
        id: "m6",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Sigur, vă sun eu mâine pe la 17:00. Mulțumesc!",
        timestamp: "2024-03-02T10:20:00Z",
        status: "read",
        online: true
    },
    {
        id: "m7",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "Am uitat să menționez, locul de parcare este inclus în preț.",
        timestamp: "2024-03-02T11:00:00Z",
        status: "read",
        online: false
    },
    {
        id: "m8",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Super! Asta e o veste excelentă. Cheltuielile de întreținere cam la cât ajung iarna?",
        timestamp: "2024-03-02T11:05:00Z",
        status: "read",
        online: true
    },
    {
        id: "m9",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "Iarna trecută au fost în jur de 450-500 lei, depinde de consum. Blocul este izolat foarte bine.",
        timestamp: "2024-03-02T11:10:00Z",
        status: "read",
        online: false
    },
    {
        id: "m10",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Am înțeles. Se poate plăti chiria și prin transfer bancar?",
        timestamp: "2024-03-02T11:12:00Z",
        status: "read",
        online: true
    },
    {
        id: "m11",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "Desigur, chiar prefer varianta aceasta. Facem contract la ANAF oricum.",
        timestamp: "2024-03-02T11:15:00Z",
        status: "read",
        online: false
    },
    {
        id: "m12",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Perfect. Mai am o întrebare: acceptați animale de companie? Am un motan foarte cuminte și educat.",
        timestamp: "2024-03-02T11:20:00Z",
        status: "read",
        online: true
    },
    {
        id: "m13",
        conversationId: "conv_123",
        senderId: "owner@test.com",
        text: "În principiu preferam fără, dar dacă spuneți că e cuminte, putem discuta la fața locului. Eventual stabilim o garanție puțin mai mare.",
        timestamp: "2024-03-02T11:25:00Z",
        status: "delivered",
        online: false
    },
    {
        id: "m14",
        conversationId: "conv_123",
        senderId: "chirias@test.com",
        text: "Sunt de acord cu garanția suplimentară. Ne vedem mâine la 18:30!",
        timestamp: "2024-03-02T11:30:00Z",
        status: "sent",
        online: true
    }
];

export default mockMessages;