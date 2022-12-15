import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

const SearchBar = ({ search, onChange, searchRef }) => {
  return (
    <TextInput
      ref={searchRef}
      sx={{ maxWidth: "780px", padding: "0 16px", margin: "0 auto" }}
      icon={<IconSearch size={18} stroke={1.5} />}
      placeholder="Start your search by model or City"
      radius="xl"
      size="md"
      value={search}
      onChange={onChange}
      pb={16}
    />
  );
};

export default SearchBar;
