
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('a[href="#sobre"]');

    aboutLink.addEventListener('click', function (e) {
        e.preventDefault();
        const aboutSection = document.querySelector('#sobre');
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const posts = [
        {
            id: 1,
            titulo: "Pilares da evolução da segurança no trabalho",
            resumo: "A tecnologia está cada vez mais presente na promoção de um ambiente mais seguro e saudável.",
            imagem: "scr/post1.png",
            conteudo: "A segurança no trabalho tem sido marcada por avanços significativos, e essas mudanças contribuem ativamente para a redução de acidentes e doenças relacionadas ao trabalho em todo o mundo. O aumento da conscientização aliado ao avanço tecnológico é uma das principais razões para essa evolução. </br></br> Novos equipamentos e tecnologias foram criados para tornar os ambientes de trabalho mais seguros e reduzir o risco de acidentes. Os equipamentos de proteção individual, como capacetes, luvas e óculos de proteção, foram aprimorados e novos materiais foram desenvolvidos para torná-los mais eficazes.</br></br>Além disso, os programas de treinamento e capacitação para os funcionários têm sido aprimorados. Cursos e treinamentos sobre segurança no trabalho são oferecidos para conscientizar os trabalhadores sobre a importância de seguir os procedimentos corretos e usar os equipamentos de proteção individual.</br></br>Com o passar do tempo, as empresas começaram a perceber que investir em medidas de segurança é fundamental para garantir a saúde e a integridade física de seus funcionários, além de evitar prejuízos financeiros decorrentes de acidentes de trabalho.</br></br>A legislação também tem desempenhado um papel fundamental na evolução da segurança no trabalho. Em vários países, leis e normas foram criadas para regulamentar a segurança no trabalho e exigir das empresas a adoção de medidas preventivas. A fiscalização também se tornou mais rigorosa, o que tem obrigado as empresas a investir cada vez mais em segurança.</br></br>Apesar de todos esses avanços, ainda há muito a ser feito para garantir a segurança no trabalho. É importante que as empresas continuem a investir em medidas preventivas e que a fiscalização seja cada vez mais rigorosa para garantir o cumprimento das normas de segurança.</br></br>Também é fundamental que os trabalhadores sejam conscientizados sobre a importância da segurança no trabalho e saibam como se proteger corretamente. Com essas medidas, é possível continuar evoluindo na busca por ambientes de trabalho mais seguros e saudáveis.Proteja sua equipe e minimize riscos no local de trabalho com os serviços de segurança no trabalho do Grupo AMO. Nossa empresa está comprometida em fornecer soluções de segurança personalizadas para atender às necessidades únicas de sua empresa.</br></br>Com nossos serviços de segurança no trabalho, você terá acesso a uma equipe de profissionais altamente treinados e experientes que irão ajudá-lo a identificar e minimizar os riscos de acidentes no local de trabalho. Desde a realização de avaliações de riscos até a implementação de medidas de segurança, nossos serviços são projetados para manter seus funcionários seguros e sua empresa em conformidade com as normas regulamentares.</br></br>Não arrisque a segurança de sua equipe ou sua conformidade regulatória. Entre em contato com o Grupo AMO hoje mesmo e saiba mais sobre como podemos ajudá-lo a manter sua equipe segura e sua empresa protegida.",
            data: "23/03/2023",
            fonte: "https://g1.globo.com/mg/triangulo-mineiro/especial-publicitario/grupo-amo/noticia/2023/03/23/pilares-da-evolucao-da-seguranca-no-trabalho.ghtml"
        },
        {
            id: 2,
            titulo: "O que é segurança no trabalho?",
            resumo: "A segurança no trabalho não é apenas uma obrigação legal, mas uma responsabilidade essencial para garantir o bem-estar dos colaboradores e o sucesso das empresas.",
            imagem: "scr/post2.png",
            conteudo: "O que é segurança no trabalho?Segurança no trabalho é o conjunto de medidas adotadas para prevenir acidentes e doenças ocupacionais, garantindo a integridade física e mental dos trabalhadores. Desde a Revolução Industrial, quando as condições de trabalho eram extremamente perigosas, até os dias de hoje, a segurança no trabalho evoluiu significativamente, tornando-se uma prioridade em empresas de todos os setores.</br></br>No Brasil, a segurança no trabalho é regulamentada por diversas Normas Regulamentadoras (NRs), que estabelecem diretrizes para a proteção dos trabalhadores. Essas normas são constantemente atualizadas para acompanhar as mudanças no ambiente de trabalho e as novas tecnologias, garantindo que as empresas mantenham seus colaboradores seguros e saudáveis.</br></br>Compreender o que é segurança no trabalho vai além de cumprir a legislação; é sobre criar um ambiente onde cada trabalhador se sinta protegido e valorizado. <i>Isso não apenas previne acidentes, mas também melhora o moral e a produtividade da equipe. Investir em segurança é, portanto, investir no sucesso da empresa.",
            data: "13/09/2024",
            fonte: "https://blog.empregare.com/seguranca-no-trabalho/"
        },
        {
            id: 3,
            titulo: "Acidente com escada no ambiente de trabalho: confira como evitar.",
            resumo: "Para ajudar nesse sentido, reunimos dicas valiosas que podem ser adotadas para evitar esse tipo de acidente. Confira!",
            imagem: "scr/post3.png",
            conteudo: `<h1 style="color: black")>Disponibilize a escada correta para os diferentes tipos de trabalho</h1>É preciso considerar o material, bem como a dimensão e a estrutura das escadas disponíveis para o colaborador trabalhar com segurança. Assim, o material não deve ser condutor para trabalhos perto de fios energizados. O objetivo é evitar o risco de choque elétrico, que faz com que o trabalhador perca o equilíbrio e sofra uma queda de altura.</br></br>Os tipos de serviços a serem realizados devem servir de base para avaliação do peso máximo que a escada suporta, considerando o colaborador e o equipamento a ser utilizado. Se a escada for classificada como insuficiente, significa que o equipamento pode falhar estruturalmente para um determinado trabalho.</br></br> <h1 style="color: black">Faça a manutenção periódica das escadas</h1>O responsável pela segurança do trabalho precisa realizar inspeções com checklist antes da instalação e utilização da escada no ambiente de trabalho. Para isso, é importante verificar a presença de parafusos, travas, e demais componentes que possam ter se soltado, além de algum defeito que possa existir.</</br></br>Ao encontrar defeitos, o profissional precisa sinalizar imediatamente a escada como defeituosa ou identificá-la com o aviso para “Não Usar” ou qualquer outro alerta semelhante, eliminando a probabilidade que outros trabalhadores possam usar.</br></br>É necessário também inspecionar a fixação da escada nos pisos inferior e superior ou verificar se há algum dispositivo que impeça o escorregamento no chão. Outra questão a ser observada, é que ela nunca deve ser instalada próximo de portas ou área de circulação, de aberturas e vãos e em locais onde exista um risco de queda de objetos ou materiais.`,
            data: "18/07/2024",
            fonte: "https://conect.online/blog/acidente-com-escada-no-ambiente-de-trabalho-confira-como-evitar/"
        }
    ];

    const postsContainer = document.getElementById("posts");
    const searchInput = document.getElementById("searchInput");

    // exibir os posts na pagina
    function mostrarPost(postFiltrados) {
        postsContainer.innerHTML = '';
        postFiltrados.forEach(post => {
            const postCard = document.createElement("div");
            postCard.className = "post-card";
            postCard.innerHTML = `
                <img src="${post.imagem}" alt="${post.titulo}">
                <h2>${post.titulo}</h2>
                <p>${post.resumo}</p>
                <small>Publicado em: ${post.data}</small>
                <br>
                <a href="post.html?id=${post.id}">Leia mais</a>
            `;
            postsContainer.appendChild(postCard);
        });
    }

    // certificar que os posts estão carregandos
    if (postsContainer) {
        console.log("Carregando posts na página inicial");
        mostrarPost(posts);
    }

    // Barra de pesquisa.
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            const query = searchInput.value.toLowerCase();
            const postFiltrados = posts.filter(post => post.titulo.toLowerCase().includes(query));
            mostrarPost(postFiltrados);
        });
    }

    // Carregar os posts para o post.html
    function loadPostContent() {
        const postContent = document.getElementById("postContent");
        if (postContent) {
            console.log("Carregando conteúdo do post...");
            const params = new URLSearchParams(window.location.search);
            const postId = parseInt(params.get("id"));
            console.log("Post ID encontrado:", postId);
            const post = posts.find(p => p.id === postId);

            if (post) {
                console.log("Post encontrado:", post);
                postContent.innerHTML = `
                    <h1>${post.titulo}</h1>
                    <img src="${post.imagem}" alt="${post.titulo}">
                    <p>${post.conteudo}</p>
                    <p><strong>Fonte:</strong> <a href="${post.fonte}">${post.fonte}</a></p>
                    <p><strong>Data de publicação:</strong> ${post.data}</p>
                `;
            } else {
                console.log("Post não encontrado.");
                postContent.innerHTML = `<p>Post não encontrado.</p>`;
            }
        } else {
            console.log("Elemento postContent não encontrado na página.");
        }
    }

    // Carregar o conteúdo do post se estiver na página post.html
    loadPostContent();
});