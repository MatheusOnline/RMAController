import { useState, useRef, useEffect } from "react";
// @ts-ignore
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateButton } from "./style";

interface DateFilterProps {
  onChangeDate: (data: { startDate: Date; endDate: Date }) => void;
}

function DateFilter({ onChangeDate }: DateFilterProps) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [active, setActive] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: PointerEvent) {
      const target = e.target as HTMLElement;

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(target) &&
        !target.closest(".rdrDateRangeWrapper")
      ) {
        setActive(false);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  function toggleDate() {
    setActive(!active);
  }

  function handleSelect(item: any) {
    const newStart = item.selection.startDate || new Date();
    const newEnd = item.selection.endDate || new Date();

    setRange([
      {
        startDate: newStart,
        endDate: newEnd,
        key: "selection",
      },
    ]);

    // 🔥 Retorna para o componente pai
    onChangeDate({
      startDate: newStart,
      endDate: newEnd,
    });
  }

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <DateButton onClick={toggleDate}>Selecione a Data</DateButton>

      {active && (
        <div
          className="calendar-wrapper"
          style={{
            position: "absolute",
            top: "45px",
            left: "0",
            zIndex: 999,
            background: "#1f1f1f",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          }}
        >
          <DateRange
            locale={ptBR}
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={range}
            rangeColors={["var(--item-color)"]}
            months={1}
            direction="horizontal"
          />
        </div>
      )}
    </div>
  );
}

export default DateFilter;
