import Text from 'components/Common/Text'
import styled from 'styled-components'
import _Container from '../Common/Container'

const Epilog = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <Text as="h2" size="2rem" lineHeight="1.2">
            Ucapan Terima Kasih dari Kru AKGQ
          </Text>
          <br />
          <Text color="yogyaBlue">
            Benar adanya bahwa masa-masa paling indah adalah masa-masa di sekolah. Demi
            mengenangnya, tercetuslah ide reuni ini sebagai momen untuk mengenang masa indah
            tersebut. Namun, yang terjadi adalah, bukan hanya mengenang, tetapi juga reuni ini
            sendirilah yang akhirnya menciptakan momen indah yang baru di masa yang berbeda. Untuk
            itu, demi merekam momen-momen indah agar tak terlupakan, kami berinisiatif untuk membuat
            sesuatu yang ke depannya dapat dikenang kembali, sehingga lahirlah majalah yang kalian
            baca ini. Sedikit cerita, di dalam proses pengerjaan ini, kami merasa sangat senang
            sekaligus haru, serta merasa beruntung karena akhirnya kami dapat kembali melahirkan
            karya yang terbentuk karena adanya momen berharga ini.
          </Text>
          <Text color="yogyaBlue">
            Terima kasih kami sampaikan kepada para pencetus reuni ini. Tanpa kalian mungkin tak
            akan lahir reuni yang bisa menjadi tempat &quot;pulang&quot;. Terima kasih kepada para
            relawan yang sudah meluangkan serta mengerahkan waktu dan tenaganya demi mempersiapkan
            dan menyukseskan jalannya acara hingga menjadi acara yang sangat apik dan berkesan.
            Terima kasih kepada teman-teman tercinta Islah 21, Straighter dan Nuzhat, yang telah
            mengisi ruang demi ruang kekosongan hati satu sama lain dengan kisah dan kasihnya. Untuk
            itu, kami dedikasikan tulisan ini kepada siapa saja yang ingin menikmati kembali momen
            demi momen yang tak dapat terulang ini.
          </Text>
        </div>
      </Wrapper>
    </Container>
  )
}

const Container = styled(_Container)`
  background-color: ${(props) => props.theme.colors.midnight};
  color: ${(props) => props.theme.colors.white};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: clamp(2rem, 16vw - 4rem, 4rem);
  color: ${(props) => props.theme.colors.white};
`

export default Epilog
