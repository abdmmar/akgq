import Text from 'components/Common/Text'
import styled from 'styled-components'
import NextImage from 'next/image'
import _Container from '../Common/Container'

const KataSiKetua = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <H2>Kata Si Ketua</H2>
          <br />
          <Content>
            <Text color="yogyaBlue">
              “Ketika gua bisa ngomong di depan teman-teman Islah 21 dan bisa nyampein apa yang gua
              rasain, bagaimana pandangan gua tentang Islah, dan gambaran Islah yang gua mau kayak
              gimana ke anak angkatan, adalah hal yang cukup berkesan buat gua. Selain pengen
              ketemu, memang tujuan gua seriusin reuni ini adalah gua pengen nyoba menyamakan
              persepsi dengan anak angkatan tentang Islah itu sendiri, karena gue yakin akan
              besarnya potensi yang dimiliki anak-anak Islah 21. Mungkin ada beberapa orang yang
              masih menganggap kalau Islah tuh nggak sepenting itu, <i>nggak guna</i>, atau segala
              pikiran semacamnya. Dari sana, gua pengen coba ngasih sudut pandang baru dan ngubah
              persepsi lu semua kalau Islah tuh sebenarnya punya potensi yang <i>gede</i>. Jujur,
              sampai akhirnya bisa berdiri di depan anak angkatan buat nyampein apa yang gua pikirin
              jadi salah satu kepuasan buat gua pribadi karena akhirnya gua punya wadah yang bisa
              bikin semua yang tadinya cuma ada di kepala gua sampai ke telinga kalian. Juga, waktu
              gua akhirnya bisa mimpin takbir dan jargon kumpul angkatan, <i>gila</i> itu salah satu
              hal yang gua pengen banget. Gua kangen banget. Setelah 4 tahun, gua pengen ngerasain
              lagi neriakin sekaligus denger jargon angkatan dan itu semua terealisasi di malam
              reuni. Terima kasih banyak, semuanya.”
            </Text>
            <div>
              <figure>
                <NextImage
                  src="/images/ameng.jpg"
                  alt="Ameng lagi megang mikrofon"
                  width={300}
                  height={300}
                  layout="fixed"
                />
                <figcaption>Ahmad Ibrahim, ketua Islah 21 yang baru</figcaption>
              </figure>
            </div>
          </Content>
        </div>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.midnight};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.midnight};
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;

  @media screen and (max-width: 425px) {
    gap: 0;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 2rem;
  }
`

export default KataSiKetua
