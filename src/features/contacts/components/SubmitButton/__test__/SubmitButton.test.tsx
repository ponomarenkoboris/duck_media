import { SubmitButton } from "../SubmitButton";
import { render } from "@testing-library/react";

describe("Тестирование компонента SubmitButton", () => {
    it("Должен отобразить компонент в состоянии DEFAULT", () => {
        const { container } = render(<SubmitButton status="DEFAULT" />);
        const btn = container.querySelector("button");
        expect(btn?.textContent).toBe("Отправить");
    });

    it("Должен отобразить компонент в состоянии PENDING", () => {
        const { container } = render(<SubmitButton status="PENDING" />);
        const btn = container.querySelector("button");
        expect(btn?.textContent).toBe("Отправка");
    });

    it("Должен отобразить компонент в состоянии ERROR", () => {
        const { container } = render(<SubmitButton status="ERROR" />);
        const btn = container.querySelector("button");
        expect(btn?.textContent).toBe("Ошибка");
    });

    it("Должен отобразить компонент в состоянии SUCCESS", () => {
        const { container } = render(<SubmitButton status="SUCCESS" />);
        const btn = container.querySelector("button");
        expect(btn?.textContent).toBe("Отправлено");
    });
});