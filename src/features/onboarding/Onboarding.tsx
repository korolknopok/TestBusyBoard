import React, { useState } from 'react';
import { ACTIONS, EVENTS, EventData, Joyride, Step } from 'react-joyride';

import { OnboardingTooltip } from 'features/onboarding/OnboardingTooltip';

const STEPS: Step[] = [
  {
    target: 'body',
    placement: 'center',
    title: 'Добро пожаловать!',
    content: 'Добро пожаловать в раздел заявки на поставку! Тут вы можете создать заявку на поставку и она появится в вашем кабинете или выгрузить уже созданные чтобы на основе них создать отгрузки',
  },
  {
    target: '.onboarding-download-button',
    title: 'Загрузка по API',
    content: 'Нажмите на эту кнопку чтобы подтянуть актуальные заявки на поставку',
  },
  {
    target: '.onboarding-create-button',
    title: 'Заявка на поставку',
    content: 'Супер, теперь давайте создадим свою собственную заявку на поставку!',
  },
  {
    target: '.supply-requests-table',
    placement: 'left',
    title: 'Готово!',
    content: 'Вы большой молодец! Поздравляем с освоением нового раздела, надеемся он принесет вам много пользы!',
  },
];

export const Onboarding = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleEvent = (data: EventData) => {
    const {type, action, index, size} = data;

    if (type === EVENTS.STEP_AFTER) {
      const nextIndex = action === ACTIONS.PREV ? index - 1 : index + 1;
      setStepIndex(((nextIndex % size) + size) % size);
    }
  };

  return (
    <Joyride
      steps={STEPS}
      run
      stepIndex={stepIndex}
      continuous
      onEvent={handleEvent}
      tooltipComponent={OnboardingTooltip}
      options={{
        closeButtonAction: 'skip',
        overlayClickAction: false,
        dismissKeyAction: false,
      }}
    />
  );
};
