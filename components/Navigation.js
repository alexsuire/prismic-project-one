import { PrismicLink, PrismicText } from "@prismicio/react";
import Text from "@/components/Text";

export function Navigation({ navigation }) {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-yellow-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <ul className="flex justify-center lg:flex-1"> {/* updated class */}
          {/* Renders top-level links. */}
          {navigation.data.slices.map((slice) => {
            return (
              <li className="m-3" key={slice.id}>
                <PrismicLink field={slice.primary.link}>
                  <Text
                    className="font-audiowide text-white"
                    field={slice.primary.name}
                  />
                </PrismicLink>

                {/* Renders child links, if present. */}
                {slice.items.length > 0 && (
                  <ul>
                    {slice.items.map((item) => {
                      return (
                        <li key={JSON.stringify(item)}>
                          <PrismicLink field={item.child_link}>
                            <PrismicText field={item.child_name} />
                          </PrismicLink>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
