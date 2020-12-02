import React, { useState } from 'react';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar
} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/Auth';

const Dashboard: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt='GoBarber'/>

          <Profile>
            <img src={ user.avatar_url } alt={ user.name }/>

            <div>
              <span> Bem-vindo, </span>
              <strong> { user.name } </strong>
            </div>
          </Profile>

          <button type='button' onClick={signOut}>
            <FiPower/>
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1> Horários agendados</h1>
          <p>
            <span> Hoje </span>
            <span> Dia 06 </span>
            <span> Segunda-feira </span>
          </p>

        <NextAppointment>
          <strong> Atendimento a seguir </strong>
          <div>
            <img
              src='https://avatars3.githubusercontent.com/u/33429566?s=460&u=c81dfc54c50ed2c2f8399fea7b1df4fefe1ddb64&v=4'
              alt='Guilherme Macrini'
            />

            <strong>Guilherme Macrini</strong>
            <span>
              <FiClock />
              08:00
            </span>
          </div>
        </NextAppointment>

        <Section>
          <strong>Manhã</strong>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img
                src='https://avatars3.githubusercontent.com/u/33429566?s=460&u=c81dfc54c50ed2c2f8399fea7b1df4fefe1ddb64&v=4'
                alt='Guilherme Macrini'
              />

              <strong>Guilherme Macrini</strong>
            </div>
          </Appointment>

        </Section>

        <Section>
          <strong>Tarde</strong>

          <Appointment>
            <span>
              <FiClock />
              08:00
            </span>

            <div>
              <img
                src='https://avatars3.githubusercontent.com/u/33429566?s=460&u=c81dfc54c50ed2c2f8399fea7b1df4fefe1ddb64&v=4'
                alt='Guilherme Macrini'
              />

              <strong>Guilherme Macrini</strong>
            </div>
          </Appointment>
        </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  )
};

export default Dashboard;
