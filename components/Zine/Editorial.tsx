import styled, { useTheme } from 'styled-components'
import _Container from '../Common/Container'

const Editorial = () => {
  const theme = useTheme()
  return (
    <Container>
      <Wrapper>
        <H2>Editorial</H2>
        <Content>
          <div>
            <Text>
              Angkatan 21 Alumni Husnul Khotimah isinya adalah para perindu. Belum juga rampung 6
              bulan pasca kelulusan, sudah memaksa untuk bertemu lagi lewat reuni 2018 di kota
              Bogor, Jawa Barat. Memang seakan rasanya tak sudi untuk berpisah walau sebentar saja.
            </Text>
            <Text>
              Tapi sayangnya, setelah reuni di Bogor itu, sekumpulan pemuda tanggung ini terpaksa
              harus berpisah kembali. Kali ini untuk waktu yang bahkan jauh lebih lama: tidak
              menentu. Mereka harus menjalani masa-masa di mana waktu, perlahan tapi pasti dan tanpa
              disadari, mencabut paksa kenangan mereka selama bertahun-tahun bersama. Mereka
              menjalani hidup masing-masing, mendapatkan teman dan pengalaman baru, mengisi
              ruang-ruang memori kosong di kepala. Tetapi, untungnya, memori bertahun-tahun bersama
              tidak tergeser barang sedikit.
            </Text>
            <Text>
              Justru karena memori-memori itu tidak tergeser, akhirnya suara-suara mereka semakin
              berisik. Justru karena memori-memori itu tidak tergeser, dorongan-dorongan mereka
              semakin mengusik. Memaksa diri untuk berbicara, memaksa diri untuk bergerak. Ingin
              rasanya kembali bertemu dengan wajah-wajah familier di ruang-ruang memori yang sudah
              lama dibiarkan terkunci itu. Rasanya, suara dari ruang-ruang memori ini tidak mau
              kalah dengan ramainya memori-memori baru yang masuk di kepala.
            </Text>
            <Text>
              Akhirnya, terjadilah reuni. Sebuah wadah yang memberi kesempatan kepada setiap suara
              di kepala untuk memuaskan hasrat rindu mereka. Harapan adanya wadah reuni ini
              sebenarnya sederhana; untuk menenangkan suara-suara dari ruang memori itu sendiri.
            </Text>
            <Text>
              Tapi naas. Tanpa disangka-sangka reuni ini malah -bukan hanya gagal- tapi lebih buruk
              dari itu. Yang seharusnya diharapkan bisa meredam suara-suara rindu, reuni malah
              membuatnya berubah menjadi teriakan-teriakan yang menggema. Ketika satu per satu
              perindu itu pulang, ketika satu per satu perindu itu angkat kaki dari Yogyakarta,
              suara-suara memori sudah mulai gemas karena kesal. Sampai akhirnya, perindu terakhir
              yang tersisa pergi dari daerah istimewa itu, suara teriakan marah ruang rindu berubah
              menjadi isak tangis.
            </Text>
          </div>
          <div>
            <Text>
              Tidak berlebihan kalau suara ruang memori digambarkan dengan isak tangis. Karena kita
              sadar bahwa momen reuni kemarin itu sebetulnya sekali seumur hidup. Karena kalaupun 1
              atau 2 tahun lagi akan diadakan, kondisinya tidak akan pernah bisa sama lagi. Beberapa
              orang bisa jadi sudah sibuk dengan pekerjaannya atau sibuk dengan pasangan bahkan
              keluarga kecilnya. Bila pun mereka bisa hadir, tak mungkin rasanya meninggalkan
              keluarga di rumah. Seorang suami pasti memikirkan istrinya, seorang istri rasanya akan
              sulit dilepas oleh suaminya. Bila keduanya hadir, tidak bisa tidur terlalu larut dan
              di tempat yang terpisah. Belum lagi kalau sudah punya buah hati, atau mungkin pasangan
              yang bukan berasal dari almamater yang sama.
            </Text>
            <Text>
              Maka, demi mengabadikan momen sekali seumur hidup itu, kami, pensiunan kru majalah
              sekolah, mencoba memberikan sebuah karya sederhana untuk para perindu semua. Untuk
              mengabadikan momen pra reuni yang diisi dengan obrolan basa-basi seputar kondisi
              terkini, duduk-duduk di kedai kopi (atau minuman lain) sambil bercanda dan bergurau
              dengan gaya yang tidak berubah selama 4 tahun kebelakang, dan momen-momen bercengkrama
              di waktu malam seakan tidak ingin matahari segera terbit.
            </Text>
            <Text>
              Majalah ini dibuat demi merekam momen-momen pas reuni yang menyatukan semua perindu,
              tak peduli latar belakang atau dekat jauh. Yang dulu bahkan tidak pernah bertegur
              sapa, bisa jadi sangat akrab dan bertukar banyak cerita.
            </Text>
            <Text>
              Majalah ini dibuat demi merekam momen-momen pasca reuni yang masih diisi dengan
              obrolan-obrolan hangat walau di tempat-tempat yang berbeda. Diisi dengan
              pelukan-pelukan perpisahan yang erat dan penuh harap. Semoga suatu saat bisa kembali
              bertemu.
            </Text>
            <Text>Majalah ini dibuat, untuk kalian, para perindu.</Text>
            <Text>Teriring salam paling hangat,</Text>
            <Text color={theme.colors.torchRed}>
              <strong>Kru Akyas - GenQ</strong>
            </Text>
          </div>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.cream};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.torchRed};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;

  gap: 52px;

  @media screen and (max-width: 425px) {
    gap: 0;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0;
  }
`

const Text = styled.p<{ color?: string }>`
  margin-bottom: 1rem;
  max-width: 60ch;
  color: ${(props) => props.color || props.theme.colors.cream};
`

export default Editorial
